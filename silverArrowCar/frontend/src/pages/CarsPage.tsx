import { getAllCars } from "../services/carService";
import type { Car, PaginatedCarResponse } from "../types/carTypes";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

// Ez a komponens a "csontváz" animációt jeleníti meg betöltés közben
const CarCardSkeleton = () => (
  <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden animate-pulse">
    <div className="w-full h-48 bg-gray-700"></div>
    <div className="p-6">
      <div className="h-6 bg-gray-700 rounded w-3/4 mb-4"></div>
      <div className="h-4 bg-gray-700 rounded w-1/2 mb-4"></div>
      <div className="flex justify-between items-center">
        <div className="h-8 bg-gray-700 rounded w-1/3"></div>
        <div className="h-4 bg-gray-700 rounded w-1/4"></div>
      </div>
    </div>
  </div>
);

export default function CarsPage() {
  const [carData, setCarData] = useState<Car[]>([]);
  const [pagination, setPagination] = useState<PaginatedCarResponse | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();

  const [page, setPage] = useState(Number(searchParams.get("page")) || 1);
  const [currentQuery, setCurrentQuery] = useState(
    searchParams.get("query") || ""
  );
  const [currentOrder, setCurrentOrder] = useState(
    searchParams.get("order") || "createdAt_desc"
  );

  useEffect(() => {
    const fetchCars = async () => {
      setLoading(true);
      try {
        const response = await getAllCars(page, currentOrder, currentQuery);
        if (response && response.data) {
          setCarData(response.data);
          setPagination(response);
        } else {
          setCarData([]);
          setPagination(null);
        }
      } catch (error) {
        console.error("Hiba az autók betöltésekor:", error);
        setCarData([]);
      } finally {
        setLoading(false);
      }
    };
    fetchCars();
  }, [currentOrder, currentQuery, page]);

  return (
    <div className="bg-gray-700 text-gray-200 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold mb-2">Minden járművünk</h1>
          {!loading && pagination && (
            <h2 className="text-xl text-gray-400">
              {pagination.totalItems} találat
            </h2>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {loading
            ? Array.from({ length: 8 }).map((_, index) => (
                <CarCardSkeleton key={index} />
              ))
            : carData.map((car) => (
                <div
                  key={car.id}
                  className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
                >
                  <img
                    src={
                      car.image[0] ||
                      "https://via.placeholder.com/800x600?text=No+Image"
                    }
                    alt={`${car.carBrand} ${car.carModel}`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 truncate">
                      {car.carBrand} {car.carModel}
                    </h3>
                    <p className="text-gray-400 mb-4">
                      {car.builtYear} |{" "}
                      {new Intl.NumberFormat("hu-HU").format(car.mileage)}{" "}
                      {car.mileageValue}| {car.engineType}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-blue-400">
                        {new Intl.NumberFormat("hu-HU").format(
                          Number(car.price)
                        )}{" "}
                        {car.currency}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
        </div>

        {/* Lapozó gombok */}
        {pagination && pagination.totalPages > 1 && !loading && (
          <div className="flex justify-center mt-12 space-x-4">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Előző
            </button>
            <span className="py-2 px-4 text-gray-300">
              {page} / {pagination.totalPages}
            </span>
            <button
              onClick={() =>
                setPage((p) => Math.min(pagination.totalPages, p + 1))
              }
              disabled={page === pagination.totalPages}
              className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Következő
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

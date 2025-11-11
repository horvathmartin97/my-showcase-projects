import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { deleteCar, getAllCars } from "../services/carService";
import type { Car, PaginatedCarResponse } from "../types/carTypes";
import { Link, useSearchParams } from "react-router";
import { NotebookIcon, Trash2Icon } from "lucide-react";
import { toShortDate } from "@/constants/date";
import SearchBar from "@/components/SearchBar";
import { AuthContext } from "@/contexts/AuthContext";
import DeleteCarDialog from "@/components/DeleteDialog";

export default function CarsActionsPage() {
  const auth = useContext(AuthContext);
  const currentUserId = useMemo(() => auth?.user?.id ?? null, [auth?.user?.id]);
  const token = useMemo(() => auth?.user?.token ?? null, [auth?.user?.token]);
  const [error, setError] = useState("");

  const [carData, setCarData] = useState<Car[]>([]);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState<PaginatedCarResponse | null>(
    null
  );
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);

  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

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

  const handleSearch = useCallback(
    ({ order, query }: { order: string; query: string }) => {
      setSearchParams({ query, order });
      setLoading(true);
      setPage(1);
      setCurrentQuery(query);
      setCurrentOrder(order);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    },
    [setSearchParams]
  );
  const handleDelete = useCallback(
    async (carId: string) => {
      setLoading(true);
      if (!token) {
        setError("Jelentkezz be");
        return;
      }
      try {
        await deleteCar(carId, token);
        setCarData((prev) => prev.filter((car) => car.id !== carId));
      } catch (error) {
        console.error("Hiba a törlés során:", error);
      } finally {
        setLoading(false);
      }
    },
    [setCarData, setLoading]
  );

  return (
    <div className="max-w-7xl mx-auto my-6 p-4 sm:p-6 bg-white rounded-md shadow-md">
      <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-5 sm:mb-6">
        Autók listája
      </h1>
      <SearchBar
        initialOrder={currentOrder}
        initialQuery={currentQuery}
        onSearch={handleSearch}
      />
      <div className="overflow-x-auto mt-4">
        <table className="min-w-full border-collapse border border-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="border border-gray-200 px-3 sm:px-5 py-2 text-left text-xs sm:text-sm font-medium text-gray-600 uppercase tracking-wider">
                Kép
              </th>
              <th className="border border-gray-200 px-3 sm:px-5 py-2 text-left text-xs sm:text-sm font-medium text-gray-600 uppercase tracking-wider">
                Márka
              </th>
              <th className="border border-gray-200 px-3 sm:px-5 py-2 text-left text-xs sm:text-sm font-medium text-gray-600 uppercase tracking-wider">
                Modell
              </th>
              <th className="hidden sm:table-cell border border-gray-200 px-5 py-2 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
                Feltöltés dátuma
              </th>
              <th className="hidden sm:table-cell border border-gray-200 px-5 py-2 text-right text-sm font-medium text-gray-600 uppercase tracking-wider">
                Ár
              </th>
              <th className="border border-gray-200 px-3 sm:px-5 py-2 text-center text-xs sm:text-sm font-medium text-gray-600 uppercase tracking-wider">
                Műveletek
              </th>
            </tr>
          </thead>
          <tbody>
            {carData.map((car) => (
              <tr
                key={car.id}
                className="hover:bg-gray-100 transition-colors duration-200"
              >
                <td className="border border-gray-200 px-2 sm:px-4 py-1 sm:py-2">
                  <img
                    className="w-20 h-12 sm:w-32 sm:h-20 rounded object-cover"
                    src={car.image[0]}
                    alt={`${car.carBrand} ${car.carModel}`}
                    loading="lazy"
                  />
                </td>
                <td className="border border-gray-200 px-3 sm:px-4 py-1 sm:py-2">
                  <Link
                    to={`/car/${car.id}`}
                    className="text-indigo-600 hover:text-indigo-800 font-medium text-sm sm:text-base"
                  >
                    {car.carBrand}
                  </Link>
                </td>
                <td className="border border-gray-200 px-3 sm:px-4 py-1 sm:py-2 text-gray-700 text-sm sm:text-base">
                  {car.carModel}
                </td>
                <td className="hidden sm:table-cell border border-gray-200 px-5 py-2 text-gray-600 whitespace-nowrap text-sm">
                  {toShortDate(car.createdAt)}
                </td>
                <td className="hidden sm:table-cell border border-gray-200 px-5 py-2 text-right text-gray-900 font-semibold text-sm">
                  {new Intl.NumberFormat("hu-HU").format(Number(car.price))}{" "}
                  {car.currency}
                </td>
                <td className="border border-gray-200 px-3 sm:px-5 py-2 flex justify-center space-x-4 text-gray-600">
                  <Trash2Icon
                    className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer hover:text-red-600 transition-colors"
                    onClick={() => {
                      setSelectedCar(car);
                      setIsDeleteDialogOpen(true);
                    }}
                  />
                  <NotebookIcon className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer hover:text-indigo-600 transition-colors" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {selectedCar && (
        <DeleteCarDialog
          open={isDeleteDialogOpen}
          onOpenChange={setIsDeleteDialogOpen}
          onConfirm={async () => {
            await handleDelete(selectedCar.id);
          }}
          carModel={selectedCar.carModel}
        />
      )}
    </div>
  );
}

import getCars from "../services/carService";
import type { Car } from "../types/carTypes";
import { useCallback, useContext, useEffect, useState } from "react";
import SearchBar from "@/components/SearchBar";
import { Link, useSearchParams } from "react-router";
import { AuthContext } from "@/contexts/AuthContext";

export default function HomePage() {
  const auth = useContext(AuthContext);
  const [cars, setCars] = useState<Car[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const [loading, setLoading] = useState(false);

  const [page, setPage] = useState(1);
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
        const response = await getCars(page, currentOrder, currentQuery);
        setCars(response);
      } catch (error) {
        console.error("Hiba az autók betöltésekor:", error);
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

  return (
    <div className="bg-gray-300 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <section className="relative h-96 bg-cover bg-center">
        <div className="absolute inset-0 bg-gray-700 bg-opacity-50 flex flex-col justify-center items-center text-center p-4">
          <h1 className="text-white font-extrabold text-4xl md:text-6xl mb-4">
            Üdvözöljük a {""}
            <span className="text-red-500">Silver Arrow Car oldalán!</span>
          </h1>
          <p className="text-white text-lg md:text-xl">
            Találja meg álmai autóját megbízható forrásból.
          </p>

          {!auth?.user && (
            <div className="my-3 w-100 flex justify-around">
              <Link
                className="text-red-500  hover:underline font-bold text-lg md:text-xl "
                to="/login"
              >
                Jelentkezz be
              </Link>

              <Link
                className="text-white hover:underline font-bold text-lg md:text-xl"
                to="/registration"
              >
                Regisztrálj itt
              </Link>
            </div>
          )}
        </div>
      </section>

      <section className="bg-white dark:bg-gray-800 p-6 shadow-md -mt-16 mx-auto max-w-4xl rounded-lg z-10 relative">
        <h2 className="text-2xl font-bold mb-4 text-center">Gyorskeresés</h2>
        <SearchBar
          onSearch={handleSearch}
          initialQuery={currentQuery}
          initialOrder={currentOrder}
        />
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">
            Elérhető járművek
          </h2>

          {loading ? (
            <div className="text-center">
              <p className="text-lg">Betöltés...</p>
            </div>
          ) : cars.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {cars.map((car) => (
                  <div
                    key={car.id}
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
                  >
                    <img
                      src={car.image[0]}
                      alt={`${car.carBrand} ${car.carModel}`}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <Link
                        to={`/car/${car.id}`}
                        className="text-xl font-bold mb-2 truncate"
                      >
                        {car.carBrand} {car.carModel}
                      </Link>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        {car.builtYear} | {car.mileage} {car.mileageValue} |
                        {car.fuelType}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                          {new Intl.NumberFormat("hu-HU").format(
                            Number(car.price)
                          )}
                          {car.currency}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-10">
              <p className="text-xl text-gray-500">
                A keresés nem hozott eredményt. Próbálj meg más kulcsszót vagy
                szűrőt!
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="bg-gray-200 dark:bg-gray-800 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-10">Szolgáltatásaink</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">
                Autóvásárlás és -eladás
              </h3>
              <p>
                Széles választékban kínálunk minőségi használt autókat, és
                segítünk a régiből kiszállni.
              </p>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">Finanszírozás</h3>
              <p>
                Kedvező hitel- és lízingkonstrukciókkal segítjük az
                autóvásárlást.
              </p>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">Garancia és Szerviz</h3>
              <p>
                Minden autónkra garanciát vállalunk, és partner szervizeinkben
                intézzük a karbantartást.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Lépjen velünk kapcsolatba!
          </h2>
          <p className="max-w-2xl mx-auto mb-8">
            Kérdése van? Autót vásárolna vagy eladna? Keressen minket bizalommal
            az alábbi elérhetőségeinken, vagy látogasson el telephelyünkre!
          </p>
          <div className="flex justify-center items-center space-x-8 text-lg">
            <p>
              <strong>Telefon:</strong> +36 70 930 9668 / +36 70 930 9669
            </p>
            <p>
              <strong>Email:</strong> veooliver@gmail.com
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

import {
  AirConditioning,
  BodyType,
  Condition,
  DriveType,
  EngineType,
  FuelType,
  TransmissionType,
  type Car,
} from "@/constants/types";
import getOneCar from "@/services/getOneCar";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const carPlaceHolder: Car = {
  id: "",
  carModel: "",
  builtYear: 0,
  price: 0,
  currency: "",
  color: "",
  transmission: TransmissionType.MANUAL,
  fuelType: FuelType.DIESEL,
  mileage: 0,
  mileageValue: "",
  bodyType: BodyType.LIMOUSINE,
  condition: Condition.USED,
  doors: 0,
  seats: 0,
  airConditioning: AirConditioning.MANUAL,
  description: "",
  engineType: EngineType.INLINE,
  engineDisplacement: 0,
  horsePower: 0,
  image: [],
  driveType: DriveType.FWD,
  carBrand: "",
};

export default function DetailedCarPage() {
  const { carId } = useParams<{ carId: string }>();

  const [carData, setCarData] = useState<Car>(carPlaceHolder);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log("carId:", carId);
    if (!carId) return;

    const fetchCar = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await getOneCar(carId);
        console.log("Lekért autó adat:", response);
        setCarData(response.data);
      } catch (error) {
        console.error("Error fetching car:", error);
        setError("Hiba történt az adatlekérés során");
      } finally {
        setLoading(false);
      }
    };

    fetchCar();
  }, [carId]);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Autó részletei</h1>

      {loading && (
        <p className="text-center text-blue-600 animate-pulse">Betöltés...</p>
      )}

      {error && (
        <p className="text-center text-red-600 font-semibold">{error}</p>
      )}

      {!loading && !error && (
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="flex flex-col md:flex-row md:space-x-6">
            <div className="md:w-1/2 mb-4 md:mb-0">
              {carData.image && carData.image.length > 0 ? (
                <img
                  src={carData.image[0]}
                  alt={`${carData.carBrand} ${carData.carModel}`}
                  className="w-full h-auto rounded-md object-cover"
                />
              ) : (
                <div className="w-full h-48 bg-gray-200 rounded-md flex items-center justify-center text-gray-500">
                  Nincs kép
                </div>
              )}
            </div>

            <div className="md:w-1/2 flex flex-col justify-between">
              <h2 className="text-2xl font-semibold mb-2">
                {carData.carBrand} {carData.carModel}
              </h2>

              <p className="text-gray-700 mb-1">
                Évjárat:{" "}
                <span className="font-medium">{carData.builtYear}</span>
              </p>
              <p className="text-gray-700 mb-1">
                Ár:
                <span className="font-medium">
                  {carData.price} {carData.currency}
                </span>
              </p>
              <p className="text-gray-700 mb-1">
                Állapot:{" "}
                <span className="font-medium">{carData.condition}</span>
              </p>
              <p className="text-gray-700 mb-1">
                Üzemanyag:{" "}
                <span className="font-medium">{carData.fuelType}</span>
              </p>
              <p className="text-gray-700 mb-1">
                Sebességváltó:{" "}
                <span className="font-medium">{carData.transmission}</span>
              </p>
              <p className="text-gray-700 mb-4">
                Kilométer:{" "}
                <span className="font-medium">
                  {carData.mileage} {carData.mileageValue}
                </span>
              </p>

              {carData.description && (
                <p className="text-gray-600 whitespace-pre-line">
                  {carData.description}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

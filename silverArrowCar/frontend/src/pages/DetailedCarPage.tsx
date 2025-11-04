import ImageCarousel from "@/components/imageCarosuel";
import {
  AirConditioning,
  BodyType,
  Condition,
  DriveType,
  EngineType,
  FuelType,
  TransmissionType,
  type Car,
} from "../constants/types";
import getOneCar from "../services/getOneCar";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

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
  indoorExtras: [],
  outDoorExtras: [],
};

export default function DetailedCarPage() {
  const { carId } = useParams<{ carId: string }>();
  const [carData, setCarData] = useState<Car>(carPlaceHolder);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPreviews, setModalPreviews] = useState<string[]>([]);

  useEffect(() => {
    if (!carId) return;
    const fetchCar = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await getOneCar(carId);
        setCarData(response.data);
      } catch (error) {
        setError(`Hiba történt az adatlekérés során,${error}`);
      } finally {
        setLoading(false);
      }
    };
    fetchCar();
  }, [carId]);
  const handleImageClick = (clickedIndex: number) => {
    const { image } = carData;
    const reordered = [
      ...image.slice(clickedIndex),
      ...image.slice(0, clickedIndex),
    ];
    setModalPreviews(reordered);
    setIsModalOpen(true);
  };
  if (loading) {
    return null;
  }

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-white text-center mb-4">
        Autó részletei
      </h1>

      {loading && (
        <p className="text-center text-blue-600 animate-pulse">Betöltés...</p>
      )}
      {error && (
        <p className="text-center text-red-600 font-semibold">{error}</p>
      )}

      {!loading && !error && (
        <div className="bg-white shadow-md rounded-lg p-6 space-y-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/2">
              <Carousel className="w-full m-0">
                <CarouselContent>
                  {carData.image.map((url, index) => (
                    <CarouselItem key={url}>
                      <div
                        className="relative aspect-video overflow-hidden rounded-lg cursor-pointer"
                        onClick={() => handleImageClick(index)}
                      >
                        <img
                          src={url}
                          alt={carData.carModel}
                          className="absolute inset-0 h-full w-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>

              <ImageCarousel
                key={carData.id}
                previews={modalPreviews}
                modalOpen={isModalOpen}
                setModalOpen={setIsModalOpen}
              />
            </div>

            <div className="md:w-1/2 flex flex-col justify-between space-y-2">
              <h2 className="text-2xl font-semibold">
                {carData.carBrand} {carData.carModel}
              </h2>

              <p className="text-3xl font-bold text-green-700">
                {new Intl.NumberFormat("hu-HU").format(Number(carData.price))}{" "}
                {carData.currency}
              </p>

              {carData.description && (
                <p className="text-gray-700 mt-4 whitespace-pre-line">
                  {carData.description}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Alapadatok</h3>
              <ul className="space-y-1 text-gray-700">
                <li>
                  Szín: <span className="font-medium">{carData.color}</span>
                </li>
                <li>
                  Évjárat:{" "}
                  <span className="font-medium">{carData.builtYear}</span>
                </li>
                <li>
                  Ajtók: <span className="font-medium">{carData.doors}</span>
                </li>
                <li>
                  Ülések: <span className="font-medium">{carData.seats}</span>
                </li>
                <li>
                  Karosszéria:{" "}
                  <span className="font-medium">{carData.bodyType}</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Műszaki adatok</h3>
              <ul className="space-y-1 text-gray-700">
                <li>
                  Motor típus:{" "}
                  <span className="font-medium">{carData.engineType}</span>
                </li>
                <li>
                  Teljesítmény:{" "}
                  <span className="font-medium">{carData.horsePower} LE</span>
                </li>
                <li>
                  Hengerűrtartalom:{" "}
                  <span className="font-medium">
                    {carData.engineDisplacement} cm³
                  </span>
                </li>
                <li>
                  Üzemanyag:{" "}
                  <span className="font-medium">{carData.fuelType}</span>
                </li>
                <li>
                  Hajtás:{" "}
                  <span className="font-medium">{carData.driveType}</span>
                </li>
                <li>
                  Váltó:{" "}
                  <span className="font-medium">{carData.transmission}</span>
                </li>
              </ul>
            </div>
            {carData.outDoorExtras && carData.outDoorExtras.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold mb-2">Külső extrák</h3>
                <div className="flex flex-wrap gap-2">
                  {carData.outDoorExtras.map((extra, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                    >
                      {extra}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
          {carData.indoorExtras && carData.indoorExtras.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Belső extrák</h3>
              <div className="flex flex-wrap gap-2">
                {carData.indoorExtras.map((extra, i) => (
                  <span
                    key={i}
                    className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm"
                  >
                    {extra}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

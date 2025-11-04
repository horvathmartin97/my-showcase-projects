import { useContext, useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router";
import { addNewCarSchema, type addNewCarType } from "@/schemas/carSchema";
import { AuthContext } from "@/contexts/AuthContext";
import uploadImagesToCloudinary, {
  deleteImagesByDeleteToken,
  type CloudinaryUploadResponse,
} from "../services/imageService";
import { addNewCar } from "@/services/carService";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import ImageUploader from "@/components/imageUpload";
import { Textarea } from "@/components/ui/textarea";

const indoorOptions = [
  "Fűtött Ülés",
  "Bluetooth",
  "Navigáció",
  "Könyöklő",
  "Elektromos ablak elől",
  "Elektromos ablak hátul",
  "Fényre sötétedő belső tükör",
  "4 hangszóró",
  "6 hangszóró",
  "8 hangszóró",
  "12 hangszóró",
  "Hűthető ülés",
  "Hangulat világítás",
  "Elektromosan állítható vezető ülés",
  "Elektromosan állítható utas ülés",
  "Digitális műszerfal",
  "Hátsó ülésfűtés",
  "Masszázs ülés",
  "Multikormány",
  "Sáv elhagyó asszisztens",
  "Sáv tartó asszisztens",
  "Légzsák",
  "ISOfix",
  "Fűthető kormánykerék",
];
const outdoorOptions = [
  "Napfénytető",
  "Tetőcsomagtartó",
  "Könnyűfém felni",
  "Panoráma tető",
  "Park radar elől",
  "Park radar hátul",
  "Tempomat",
  "Távolság tartó tempomat",
  "360 fokos kamera",
  "Tolató kamera",
  "Elektromos visszapillantó tükör",
  "Behajló visszapillantó tükör",
  "Sötétedő visszapillantó tükör",
  "Led világítás",
  "Xenon világítás",
  "Menetfény",
  "Eső érzékelő",
  "Autómata fényszoró kapcsolás",
];

export default function AddNewCar() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [imageUploadError, setImageUploadError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [submissionError, setSubmissionError] = useState<string | null>(null);

  const auth = useContext(AuthContext);
  const token = auth!.user?.token;
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm({
    resolver: zodResolver(addNewCarSchema),
    defaultValues: {
      mileageValue: "km",
      airConditioning: "",
      bodyType: "",
      builtYear: 0,
      carBrand: "",
      carModel: "",
      color: "",
      condition: "",
      currency: "",
      description: "",
      doors: 2,
      driveType: "",
      engineDisplacement: 0,
      engineType: "",
      fuelType: "",
      horsePower: 0,
      image: [],
      indoorExtras: [],
      mileage: 0,
      outDoorExtras: [],
      price: 1,
      seats: 0,
      transmission: "",
    },
  });

  const onUploadComplete = useCallback(
    (_: string[], files: File[]) => {
      if (files && files.length > 0) {
        setValue("image", files, { shouldValidate: true });
        setImageUploadError(null);
      } else {
        setValue("image", [], { shouldValidate: true, shouldDirty: true });
      }
    },
    [setValue]
  );
  const onSubmit = useCallback(
    async (data: addNewCarType) => {
      console.log(data);
      setIsSubmitting(true);
      setImageUploadError(null);
      setSubmissionError(null);
      setSuccessMessage("");
      let imageUrls: CloudinaryUploadResponse[] = [];
      console.log(data);

      try {
        const uploadedUrls = await uploadImagesToCloudinary(
          data.image,
          "location_images"
        );
        imageUrls = uploadedUrls;
        const urls = imageUrls.map((url) => url.secure_url);

        const payload = {
          contentType: "CAR",
          carBrand: data.carBrand,
          carModel: data.carModel,
          builtYear: data.builtYear,
          price: data.price,
          currency: data.currency,
          color: data.color,
          transmission: data.transmission,
          fuelType: data.fuelType,
          mileage: data.mileage,
          mileageValue: data.mileageValue,
          bodyType: data.bodyType,
          driveType: data.driveType,
          condition: data.condition,
          doors: data.doors,
          seats: data.seats,
          airConditioning: data.airConditioning,
          description: data.description,
          engineType: data.engineType,
          engineDisplacement: data.engineDisplacement,
          horsePower: data.horsePower,
          image: urls,
          outDoorExtras: data.outDoorExtras,
          indoorExtras: data.indoorExtras,
        };

        if (!token) {
          setSubmissionError("You must be logged in to create a location.");
          setIsSubmitting(false);
          return;
        }

        await addNewCar(payload, token);

        setSuccessMessage("Successfully added");
        reset();
        navigate("/");
      } catch (error) {
        await deleteImagesByDeleteToken(imageUrls);
        setSubmissionError(`Failed to submit the form.${error}`);
      } finally {
        setIsSubmitting(false);
      }
    },
    [token, reset, navigate]
  );

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-md shadow-md my-8">
      <h1 className="text-3xl font-semibold mb-6 text-center">
        Autó Hozzáadása
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label
              htmlFor="carBrand"
              className="block mb-1 font-medium text-gray-700"
            >
              Autó Márka:
            </Label>
            <Input
              id="carBrand"
              type="text"
              {...register("carBrand")}
              className={`w-full rounded border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.carBrand ? "border-red-500" : "border-gray-300"
              }`}
            />
            <p className="mt-1 text-sm text-red-500">
              {errors.carBrand?.message}
            </p>
          </div>

          <div>
            <Label
              htmlFor="carModel"
              className="block mb-1 font-medium text-gray-700"
            >
              Autó típus:
            </Label>
            <Input
              id="carModel"
              type="text"
              {...register("carModel")}
              className={`w-full rounded border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.carModel ? "border-red-500" : "border-gray-300"
              }`}
            />
            <p className="mt-1 text-sm text-red-500">
              {errors.carModel?.message}
            </p>
          </div>

          <div>
            <Label
              htmlFor="builtYear"
              className="block mb-1 font-medium text-gray-700"
            >
              Gyártási Év:
            </Label>
            <Input
              id="builtYear"
              type="number"
              {...register("builtYear", { valueAsNumber: true })}
              className={`w-full rounded border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.builtYear ? "border-red-500" : "border-gray-300"
              }`}
            />
            <p className="mt-1 text-sm text-red-500">
              {errors.builtYear?.message}
            </p>
          </div>

          <div>
            <Label
              htmlFor="price"
              className="block mb-1 font-medium text-gray-700"
            >
              Ár:
            </Label>
            <Input
              id="price"
              type="number"
              {...register("price", { valueAsNumber: true })}
              className={`w-full rounded border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.price ? "border-red-500" : "border-gray-300"
              }`}
            />
            <p className="mt-1 text-sm text-red-500">{errors.price?.message}</p>
          </div>
          <div>
            <Label
              htmlFor="currency"
              className="block mb-1 font-medium text-gray-700"
            >
              Currency
            </Label>
            <Input type="text" {...register("currency")} />
          </div>

          <div>
            <Label
              htmlFor="color"
              className="block mb-1 font-medium text-gray-700"
            >
              Szín:
            </Label>
            <Input
              id="color"
              type="text"
              {...register("color")}
              className={`w-full rounded border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.color ? "border-red-500" : "border-gray-300"
              }`}
            />
            <p className="mt-1 text-sm text-red-500">{errors.color?.message}</p>
          </div>

          <div>
            <Label
              htmlFor="transmission"
              className="block mb-1 font-medium text-gray-700"
            >
              Váltó típusa:
            </Label>
            <select
              id="transmission"
              {...register("transmission")}
              className={`w-full rounded border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.transmission ? "border-red-500" : "border-gray-300"
              }`}
            >
              <option value="MANUAL">Manuális</option>
              <option value="AUTOMATIC">Autómata</option>
              <option value="SEMI_AUTOMATIC">Fél-Autómata</option>
              <option value="CVT">CVT</option>
              <option value="DUAL_CLUTCH">Fokozat mentes autómata</option>
            </select>
            <p className="mt-1 text-sm text-red-500">
              {errors.transmission?.message}
            </p>
          </div>
          <div>
            <Label
              htmlFor="seats"
              className="block mb-1 font-medium text-gray-700"
            >
              Ülések száma:
            </Label>
            <Input
              type="number"
              id="seats"
              {...register("seats", { valueAsNumber: true })}
              className={`w-full rounded border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.seats ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.seats && (
              <p className="mt-1 text-sm text-red-500">
                {errors.seats.message}
              </p>
            )}
          </div>
          <div>
            <Label htmlFor="horsePower">Teljesítmény</Label>
            <Input
              type="number"
              id="horsePower"
              {...register("horsePower", { valueAsNumber: true })}
              className={`w-full rounded border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.horsePower ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.horsePower && (
              <p className="mt-1 text-sm text-red-500">
                {errors.horsePower.message}
              </p>
            )}
          </div>

          <div>
            <Label
              htmlFor="fuelType"
              className="block mb-1 font-medium text-gray-700"
            >
              Üzemanyag:
            </Label>
            <select
              id="fuelType"
              {...register("fuelType")}
              className={`w-full rounded border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.fuelType ? "border-red-500" : "border-gray-300"
              }`}
            >
              <option value="PETROL">Benzin</option>
              <option value="DIESEL">Dízel</option>
              <option value="ELECTRIC">Elektromos</option>
              <option value="HYBRID">HYBRID</option>
              <option value="CNG">CNG</option>
              <option value="LPG">LPG</option>
            </select>
            <p className="mt-1 text-sm text-red-500">
              {errors.fuelType?.message}
            </p>
          </div>

          <div>
            <Label
              htmlFor="mileage"
              className="block mb-1 font-medium text-gray-700"
            >
              Futásteljesítmény:
            </Label>
            <Input
              id="mileage"
              type="number"
              {...register("mileage", { valueAsNumber: true })}
              className={`w-full rounded border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.mileage ? "border-red-500" : "border-gray-300"
              }`}
            />
            <p className="mt-1 text-sm text-red-500">
              {errors.mileage?.message}
            </p>
          </div>

          <div>
            <Label
              htmlFor="bodyType"
              className="block mb-1 font-medium text-gray-700"
            >
              Karosszéria:
            </Label>
            <select
              id="bodyType"
              {...register("bodyType")}
              className="w-full rounded border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="SEDAN">Szedán</option>
              <option value="SUV">Suv</option>
              <option value="HATCHBACK">Hatchback</option>
              <option value="COUPE">Coupé</option>
              <option value="CONVERTIBLE">Kabrió</option>
              <option value="WAGON">Wagon</option>
              <option value="VAN">Busz</option>
              <option value="Pickup">Pickup</option>
              <option value="MINIVAN">Kisbusz</option>
              <option value="ROADSTER">Roadster</option>
              <option value="LIMOUSINE">Limuzin</option>
              <option value="OFF_ROAD">OFF Road</option>
              <option value="MICROCAR">Micro Car</option>
            </select>
            <p>{errors.bodyType?.message}</p>
          </div>

          <div>
            <Label
              htmlFor="driveType"
              className="block mb-1 font-medium text-gray-700"
            >
              Hajtás:
            </Label>
            <select
              id="driveType"
              {...register("driveType")}
              className="w-full rounded border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>Válassz</option>
              <option value="FWD">Elsőkerék hajtás</option>
              <option value="RWD">Hátsókerék hajtás</option>
              <option value="AWD">Összkerék meghajtás</option>
              <option value="FOUR_WHEEL">4 kerék meghajtás</option>
            </select>
          </div>

          <div>
            <Label
              htmlFor="condition"
              className="block mb-1 font-medium text-gray-700"
            >
              Állapot:
            </Label>
            <select
              id="condition"
              {...register("condition")}
              className="w-full rounded border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>Válassz</option>
              <option value="NEW">Új</option>
              <option value="USED">Használt</option>
              <option value="CERTIFIED_PRE_OWNED">
                Hivatalosan bevizsgált
              </option>
            </select>
          </div>
          <div>
            <Label htmlFor="airConditioning">Légkondi:</Label>
            <select
              className="w-full rounded border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("airConditioning")}
              id="airConditioning"
            >
              <option value="MANUAL">Manuális</option>
              <option value="AUTOMATIC">Autómata</option>
              <option value="DUAL_ZONE">Két Zónás autómata</option>
              <option value="MULTI ZONE">Több zónás autómata</option>
              <option value="NONE">Nincs</option>
            </select>
          </div>
          <div>
            <Label htmlFor="engineType">Motor Típus:</Label>
            <select
              className="w-full rounded border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("engineType")}
              id="engineType"
            >
              <option value="INLINE">Soros</option>
              <option value="V_TYPE">V tipusú</option>
              <option value="BOXER">BOXER</option>
              <option value="ROTARY">ROTARY</option>
              <option value="ELECTRIC">Elektromos</option>
              <option value="HYBRID">Hibrid</option>
            </select>
          </div>
          <div>
            <Label className="block mb-2 font-medium">Belső extrák :</Label>
            {indoorOptions.map((option) => (
              <label key={option} className="inline-flex items-center mr-4">
                <input
                  type="checkbox"
                  value={option}
                  {...register("indoorExtras")}
                  className="form-checkbox"
                />
                <span className="ml-2">{option}</span>
              </label>
            ))}
          </div>

          <div>
            <Label className="block mb-2 font-medium">Külső extrák :</Label>
            {outdoorOptions.map((option) => (
              <label key={option} className="inline-flex items-center mr-4">
                <input
                  type="checkbox"
                  value={option}
                  {...register("outDoorExtras")}
                  className="form-checkbox"
                />
                <span className="ml-2">{option}</span>
              </label>
            ))}
          </div>
        </div>
        <div>
          <Label htmlFor="engineDisplacement">Hengerűrtartalom:</Label>
          <Input
            type="number"
            id="engineDisplacement"
            {...register("engineDisplacement", { valueAsNumber: true })}
          />
        </div>

        <div>
          <Label htmlFor="description">Leírás:</Label>
          <Textarea {...register("description")} />
        </div>

        <div>
          <Label className="block mb-2 font-medium text-gray-700">
            Képek feltöltése
          </Label>
          <ImageUploader
            onUploadComplete={onUploadComplete}
            onError={setImageUploadError}
            MAX_IMAGES={10}
          />
          <p className="mt-1 text-sm text-red-500 min-h-[1.25rem]">
            {imageUploadError || errors.image?.message}
          </p>
        </div>
        <div>
          <Label htmlFor="engineDisplacement">Hengerűrtartalom:</Label>
          <Input
            type="number"
            id="engineDisplacement"
            {...register("engineDisplacement", { valueAsNumber: true })}
          />
        </div>

        <div className="mt-6">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-blue-400"
          >
            {isSubmitting ? "Létrehozás..." : "Autó létrehozása"}
          </button>
          <div className="min-h-[1.25rem] mt-2">
            {submissionError && (
              <p className="text-red-500 text-sm">{submissionError}</p>
            )}
            {successMessage && (
              <p className="text-green-600 text-sm">{successMessage}</p>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}

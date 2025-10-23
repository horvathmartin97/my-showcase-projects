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
import { Button } from "@/components/ui/button";
import ImageUploader from "@/components/imageUpload";

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
    watch,
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
      doors: 0,
      driveType: "",
      engineDisplacement: 0,
      engineType: "",
      fuelType: "",
      horsePower: 0,
      image: [],
      indoorExtras: [],
      mileage: 0,
      outDoorExtras: [],
      price: 0,
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
          brand: data.carBrand,
          model: data.carModel,
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
          carBrand: data.carBrand,
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
  const selectedTransmission = watch("transmission");
  const selectedFuelType = watch("fuelType");
  return (
    <div>
      <h1>Autó Hozzáadása</h1>
      <div>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div>
            <Label htmlFor="carBrand">Autó Márka:</Label>
            <Input
              type="text"
              id="carBrand"
              {...register("carBrand")}
              className={`${
                errors.carBrand ? "border-red-500" : "border-gray-300"
              }`}
            />
            <p className="text-sm text-red-500 ">{errors.carBrand?.message}</p>
          </div>
          <div>
            <Label htmlFor="carModel">Autó típus:</Label>
            <Input
              type="text"
              id="carModel"
              {...register("carModel")}
              className={`${
                errors.carModel ? "border-red-500" : "border-gray-300"
              }`}
            />
            <p className="text-sm text-red-500 ">{errors.carModel?.message}</p>
          </div>
          <div>
            <Label htmlFor="builtYear">Gyártási Év:</Label>
            <Input
              id="builtYear"
              type="number"
              {...register("builtYear", { valueAsNumber: true })}
              className={`${
                errors.builtYear ? "border-red-500" : "border-gray-300"
              }`}
            />
            <p className="text-sm text-red-500 ">{errors.builtYear?.message}</p>
          </div>
          <div>
            <Label htmlFor="price">ÁR:</Label>
            <Input
              id="price"
              type="number"
              {...register("price", { valueAsNumber: true })}
              className={`${errors.price ? "border-red-500" : "border-gray-300"}`}
            />
            <p className="text-sm text-red-500">{errors.price?.message}</p>
          </div>
          <div>
            <Label htmlFor="color">Szín:</Label>
            <Input
              id="color"
              type="text"
              {...register("color")}
              className={`${
                errors.color ? "border-red-500" : "border-gray-300"
              }`}
            />
            <p className="text-sm text-red-500">{errors.color?.message}</p>
          </div>
          <div>
            <Label htmlFor="transmission">Váltó típusa:</Label>
            <select {...register("transmission")}>
              <option value="MANUAL">Manuális</option>
              <option value="AUTOMATIC">Autómata</option>
              <option value="SEMI_AUTOMATIC">Fél-Autómata</option>
              <option value="CVT">CVT</option>
              <option value="DUAL_CLUTCH">Fokozat mentes autómata</option>
            </select>
            <p>Selected: {selectedTransmission}</p>
            <p className="text-sm text-red-500">
              {errors.transmission?.message}
            </p>
          </div>
          <div>
            <Label htmlFor="fuelType">Üzemanyag:</Label>
            <select {...register("fuelType")}>
              <option value="PETROL">Benzin</option>
              <option value="DIESEL">Dízel</option>
              <option value="ELECTRIC">Elektromos</option>
              <option value="HYBRID">HYBRID</option>
              <option value="CNG">CNG</option>
              <option value="LPG">LPG</option>
            </select>
            <p>Selected: {selectedFuelType}</p>
            <p className="text-sm text-red-500">{errors.fuelType?.message}</p>
          </div>
          <div>
            <Label htmlFor="mileage">Futásteljesítmény:</Label>
            <Input
              id="mileage"
              type="number"
              {...register("mileage", { valueAsNumber: true })}
            />
            <p className="text-sm text-red-500">{errors.mileage?.message}</p>
          </div>
          <div>
            <Label className="block mb-2 font-medium">Upload Images</Label>
            <ImageUploader
              onUploadComplete={onUploadComplete}
              onError={setImageUploadError}
              MAX_IMAGES={5}
            />
            <p className="text-red-500 text-sm mt-1 min-h-[1.25rem]">
              {imageUploadError || errors.image?.message}
            </p>
          </div>
          <div className="w-full space-y-2">
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Creating..." : "Create Car"}
            </Button>
            <div className="min-h-[1.25rem]">
              {submissionError && (
                <p className="text-sm text-red-500">{submissionError}</p>
              )}
              {successMessage && (
                <p className="text-sm text-green-600">{successMessage}</p>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

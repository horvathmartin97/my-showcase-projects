import { useState, useEffect, useMemo } from "react";
import { X } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import ImageCarousel from "./imageCarosuel";
import { Input } from "./ui/input";

type ImageUploaderProps = {
  onUploadComplete: (urls: string[], files: File[]) => void;
  onError?: (msg: string | null) => void;
  MAX_IMAGES: number;
};

export default function ImageUploader({
  onUploadComplete,
  onError,
  MAX_IMAGES,
}: ImageUploaderProps) {
  const [previews, setPreviews] = useState<string[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);
  const [localError, setLocalError] = useState<string | null>(null);
  const errorSetter = useMemo(
    () => onError ?? setLocalError,
    [onError, setLocalError]
  );

  useEffect(() => {
    const newPreviews = imageFiles.map((file) => URL.createObjectURL(file));
    setPreviews(newPreviews);

    return () => {
      newPreviews.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [imageFiles]);

  useEffect(() => {
    setUploading(true);
    if (localError) {
      const timeout = setTimeout(() => setLocalError(null), 4000);
      setUploading(false);
      return () => clearTimeout(timeout);
    }
    setUploading(false);
    return () => false;
  }, [localError]);

  const handleFilesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUploading(true);
    const { files } = e.target;
    if (!files || files.length === 0) {
      errorSetter?.("Please select at least one image.");
      setUploading(false);
      return;
    }
    const filesArray = Array.from(files);
    const remainingSlots = MAX_IMAGES - imageFiles.length;

    if (filesArray.length > remainingSlots) {
      errorSetter?.(`You can only upload up to ${MAX_IMAGES} images total.`);
      setUploading(false);
      return;
    }

    const newFiles = filesArray.slice(0, remainingSlots);
    const updatedFiles = [...imageFiles, ...newFiles];
    setImageFiles((prev) => [...prev, ...newFiles]);
    errorSetter?.(null);
    onUploadComplete([], updatedFiles);
    e.target.value = "";
    setUploading(false);
  };

  const handleDeleteImage = (index: number) => {
    const updatedFiles = imageFiles.filter((_, i) => i !== index);
    setImageFiles(updatedFiles);
    onUploadComplete([], updatedFiles);
    if (carouselIndex >= updatedFiles.length && carouselIndex > 0) {
      setCarouselIndex(carouselIndex - 1);
    }
  };

  return (
    <div>
      <Input
        id="multi-image-upload"
        type="file"
        accept="image/*"
        multiple
        onChange={handleFilesChange}
        className="hidden"
        disabled={imageFiles.length >= MAX_IMAGES || uploading}
      />

      {MAX_IMAGES !== 1 && (
        <div className="mb-2 text-sm font-medium text-gray-700">
          Maximum Images: {imageFiles.length} / {MAX_IMAGES}
        </div>
      )}

      <div className="mt-4 flex gap-2 flex-wrap items-center">
        {previews.map((preview, i) => (
          <div key={preview} className="relative group">
            <img
              src={preview}
              alt={`preview-${i}`}
              className="h-24 w-24 rounded object-cover border cursor-pointer"
              onClick={() => {
                setCarouselIndex(i);
                setModalOpen(true);
              }}
            />
            <Button
              type="button"
              variant="destructive"
              size="icon"
              onClick={() => handleDeleteImage(i)}
              className="absolute top-1 right-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        ))}
        {imageFiles.length < MAX_IMAGES && (
          <div
            onClick={() =>
              document.getElementById("multi-image-upload")?.click()
            }
            className="flex h-24 w-24 cursor-pointer items-center justify-center rounded border-2 border-dashed border-gray-400 text-gray-400 hover:border-black hover:text-black transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </div>
        )}
      </div>
      {!onError && localError && (
        <p className="text-red-500 text-sm mt-2">{localError}</p>
      )}
      {uploading && (
        <p className="text-sm text-gray-500 italic mt-2">Uploading images...</p>
      )}
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent
          aria-describedby={undefined}
          className="fixed bg-black flex items-center justify-center"
          style={{ width: "90vw", height: "90vh", maxWidth: "100vw" }}
        >
          <DialogTitle className="sr-only">Image preview</DialogTitle>

          <ImageCarousel
            previews={previews}
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}

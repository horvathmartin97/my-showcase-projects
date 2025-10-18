import React from "react";
import { Dialog, DialogContent, DialogClose } from "./ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./ui/carousel";

type ImageCarouselProps = {
  previews: string[];
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ImageCarousel({
  previews,
  modalOpen,
  setModalOpen,
}: ImageCarouselProps) {
  return (
    <Dialog open={modalOpen} onOpenChange={setModalOpen}>
      <DialogContent
        className="fixed bg-black flex items-center justify-center"
        style={{ width: "90vw", height: "90vh", maxWidth: "100vw" }}
      >
        <Carousel className="relative w-full h-full flex items-center justify-center">
          <CarouselContent className="w-full h-full rounded-md">
            {previews.map((src, i) => (
              <CarouselItem
                key={src}
                className="w-full h-full flex items-center justify-center"
              >
                <img
                  src={src}
                  alt={`carousel-${i}`}
                  className="w-[90vw] h-[85vh] object-contain ml-4"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute top-1/2 left-2 -translate-y-1/2 rounded-full bg-white/70 p-2 hover:bg-white/90 z-10">
            ‹
          </CarouselPrevious>
          <CarouselNext className="absolute top-1/2 right-2 -translate-y-1/2 rounded-full bg-white/70 p-2 hover:bg-white/90 z-10">
            ›
          </CarouselNext>

          <DialogClose className="absolute top-1 right-2 z-50 text-white bg-black/70 hover:bg-black/90 w-10 h-10 flex items-center justify-center rounded-full">
            ✕
          </DialogClose>
        </Carousel>
      </DialogContent>
    </Dialog>
  );
}

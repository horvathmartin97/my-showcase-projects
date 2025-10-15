import { Instagram } from "lucide-react";

export default function SocialLinks() {
  return (
    <div className="flex flex-col md:flex-row mt-30 gap-4 justify-center">
      <a
        href="https://www.instagram.com/silvercarbaja/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 text-pink-500 hover:text-pink-700 bg-pink-50 hover:bg-pink-100 rounded-lg py-2 px-4 shadow-sm transition cursor-pointer"
        aria-label="Instagram"
      >
        <Instagram size={32} />
        <span>@SilverCar</span>
      </a>
    </div>
  );
}

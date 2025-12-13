import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const languages = [
    { code: "HU", name: "Magyar", label: "🇭🇺" },
    { code: "DE", name: "Deutsch", label: "🇩🇪" },
  ];

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="flex items-center space-x-2 rounded-full bg-gray-700 p-1 w-25">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => handleLanguageChange(lang.code)}
          className={`px-3 py-1 text-sm font-bold rounded-full transition-colors duration-300
            ${
              i18n.language === lang.code
                ? "bg-blue-500 text-white"
                : "text-gray-300 hover:bg-gray-600"
            }
          `}
          aria-label={`Switch to ${lang.name}`}
          aria-pressed={i18n.language === lang.code}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
}

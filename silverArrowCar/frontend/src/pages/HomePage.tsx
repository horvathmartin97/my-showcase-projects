export default function HomePage() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <section className="relative h-96 bg-cover bg-center">
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center p-4">
          <h1 className="text-white font-extrabold text-4xl md:text-6xl mb-4">
            Üdvözöljük a Silver Arrow Car oldalán!
          </h1>
          <p className="text-white text-lg md:text-xl">
            Találja meg álmai autóját megbízható forrásból.
          </p>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-800 p-6 shadow-md -mt-16 mx-auto max-w-4xl rounded-lg z-10 relative">
        <h2 className="text-2xl font-bold mb-4 text-center">Gyorskeresés</h2>
        <form className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <select className="p-3 border rounded-md dark:bg-gray-700 dark:border-gray-600">
            <option>Márka</option>
          </select>
          <select className="p-3 border rounded-md dark:bg-gray-700 dark:border-gray-600">
            <option>Modell</option>
          </select>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold p-3 rounded-md transition-colors"
          >
            Keresés
          </button>
        </form>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">
            Kiemelt Ajánlataink
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://source.unsplash.com/random/800x600/?car"
                alt="Autó kép"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  Mercedes-Benz C-osztály
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  2022 | 35,000 km | Dízel
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">
                    15.500.000 Ft
                  </span>
                  <a href="#" className="text-blue-500 hover:underline">
                    Részletek
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <a
              href="/autok"
              className="bg-gray-800 dark:bg-gray-200 text-white dark:text-black font-bold py-3 px-8 rounded-full hover:bg-gray-700 dark:hover:bg-gray-300 transition-colors"
            >
              Összes jármű megtekintése
            </a>
          </div>
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
              <strong>Telefon:</strong> +36 30 123 4567
            </p>
            <p>
              <strong>Email:</strong> info@silverarrow.hu
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

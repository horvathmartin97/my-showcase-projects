import donBociLogo from "./assets/donbociLogo.jpg";
import donPipiLogo from "./assets/don_pipi_logo_hatter_nelkul_szines (2).png";

type restaurants = {
  id: number;
  image: string;
  address: string;
  name: string;
  link: string;
};
function App() {
  const links: restaurants[] = [
    {
      id: 1,
      image: donBociLogo,
      address: "6500 Baja, Kossuth Lajos utca 12",
      name: "donBoci",
      link: " https://order.site/donboci/hu/hun/baja/restaurant/donboci-baja-sf",
    },
    {
      id: 2,
      image: donPipiLogo,
      address: "6500 Baja, Szenes utca 7",
      name: "donPipi",
      link: " https://order.site/donpipi/hu/hun/baja/restaurant/donpipi-sf",
    },
  ];
  return (
    <div>
      {links.map((link) => (
        <div key={link.id}>
          <h1>{link.name}</h1>
          <a href={link.link}>{link.name}</a>
        </div>
      ))}
    </div>
  );
}

export default App;

import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';

export default function Statement() {
  return (
    <Reveal as="section" className="pad bg-white">
      <p className="eyebrow eyebrow-dark">MOBLUX MODULAR HOMES</p>
      <div className="grid items-end gap-[70px] max-lg:grid-cols-1 max-lg:gap-[22px] lg:grid-cols-[1.35fr_0.65fr]">
        <h2 className="text-[clamp(42px,5vw,72px)]">
          Nem egyszerűen házat kínálunk.
          <br />
          <em>Életteret tervezünk.</em>
        </h2>
        <div>
          <p className="text-[17px] text-muted">
            Minden MOBLUX otthon az Ön életéhez igazodik. Válasszon méretet, elrendezést, színeket és
            felszereltséget — mi egységes, átgondolt otthonná formáljuk.
          </p>
          <Link to="/szemelyre-szabas" className="text-xs font-bold">
            Nézze meg a lehetőségeket →
          </Link>
        </div>
      </div>
    </Reveal>
  );
}

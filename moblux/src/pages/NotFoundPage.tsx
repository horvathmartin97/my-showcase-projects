import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <section className="pad bg-ink pt-[180px] text-white">
      <p className="eyebrow">404</p>
      <h1 className="text-[clamp(48px,6vw,90px)]">Ez az oldal nem található</h1>
      <p className="mt-6 max-w-[620px] text-[#d0d0cb]">
        A keresett tartalom átkerült vagy megszűnt. A modellek és az alaprajzok a főoldalon érhetők
        el.
      </p>
      <Link to="/" className="btn btn-gold mt-8">
        Vissza a főoldalra
      </Link>
    </section>
  );
}

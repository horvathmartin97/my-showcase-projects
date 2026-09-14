import { Link } from 'react-router-dom';
import { SITE, SITEMAP } from '../data/site';
import Img from './Img';
import { telHref } from '../lib/format';

export default function Footer() {
  return (
    <footer className="bg-[#0b0c0a] px-[4vw] pt-[54px] pb-[42px] text-[#888] max-sm:px-5">
      <div className="mx-auto grid w-full max-w-[var(--max)] gap-12 max-lg:grid-cols-2 max-sm:grid-cols-1 lg:grid-cols-[1.1fr_repeat(3,0.63fr)]">
        <div className="max-w-sm">
          <div className="h-[56px] w-[150px]">
            <Img src={SITE.logo} alt="MOBLUX" fit="contain" className="object-left" />
          </div>
          <p className="mt-5">{SITE.tagline}</p>
          <a href={telHref(SITE.phone)} className="mt-5 inline-block text-lg text-white hover:text-gold">
            {SITE.phone}
          </a>
          <p className="mt-1 text-[13px]">{SITE.showroom}</p>
        </div>

        {SITEMAP.map((group) => (
          <nav key={group.group} aria-label={group.group}>
            <p className="mb-4 text-[9px] font-bold tracking-[0.16em] text-gold">
              {group.group.toUpperCase()}
            </p>
            <ul className="m-0 list-none p-0">
              {group.links.map((link) => (
                <li key={link.to} className="mb-2.5">
                  <Link to={link.to} className="text-[13px] hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="mx-auto mt-12 flex w-full max-w-[var(--max)] flex-col gap-2 border-t border-white/10 pt-6 text-[9px] sm:flex-row sm:justify-between">
        <p className="m-0">© 2026 {SITE.legalName}</p>
        <a href={SITE.facebook} target="_blank" rel="noreferrer" className="hover:text-gold">
          MOBLUX Facebook
        </a>
      </div>
    </footer>
  );
}

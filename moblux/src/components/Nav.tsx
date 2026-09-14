import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV, SITE } from '../data/site';
import Img from './Img';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname, hash]);

  // A telepítési oldalon az elsődleges cél a telekellenőrzés, nem az ajánlatkérés.
  const cta =
    pathname === '/telepites'
      ? { label: 'Ellenőrzést kérek ↗', to: '/telepites#siting-check' }
      : { label: 'Ajánlatot kérek ↗', to: '/ajanlatkeres' };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-20 flex items-center gap-[30px] px-[4vw] text-white transition-[height,background-color] duration-300 max-sm:px-5 ${
        scrolled
          ? 'h-[74px] bg-ink/96 backdrop-blur-[12px] max-sm:h-[66px]'
          : 'h-[92px] bg-gradient-to-b from-black/60 to-transparent max-sm:h-[72px]'
      }`}
    >
      <Link to="/" className="mr-auto flex items-center" aria-label={`${SITE.name} főoldal`}>
        <div
          className={`shrink-0 transition-all duration-300 ${
            scrolled ? 'h-[66px] w-[174px]' : 'h-[78px] w-[196px]'
          } max-sm:h-[58px] max-sm:w-[140px]`}
        >
          <Img
            src={SITE.logo}
            alt="MOBLUX Modular Homes"
            loading="eager"
            fit="contain"
            className="object-left drop-shadow-[0_4px_14px_#0008]"
          />
        </div>
      </Link>

      <nav className="flex gap-6 max-lg:hidden">
        {NAV.map((item) => {
          const active = isActive(pathname, item.to);
          return (
            <Link
              key={item.to}
              to={item.to}
              aria-current={active ? 'page' : undefined}
              className={`text-xs font-bold hover:text-gold hover:opacity-100 ${
                active ? 'text-gold opacity-100' : 'opacity-[0.82]'
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      <Link
        to={cta.to}
        className="border border-white/35 px-[15px] py-2.5 text-xs font-bold max-lg:ml-auto max-sm:hidden"
      >
        {cta.label}
      </Link>

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="mobile-nav"
        className="grid gap-1.5 border-0 bg-none p-2.5 lg:hidden"
      >
        <span className="sr-only">Menü</span>
        <i className={`block h-px w-[23px] bg-white transition-transform ${open ? 'translate-y-[3.5px] rotate-45' : ''}`} />
        <i className={`block h-px w-[23px] bg-white transition-transform ${open ? '-translate-y-[3.5px] -rotate-45' : ''}`} />
      </button>

      {open && (
        <nav
          id="mobile-nav"
          className="fixed inset-x-0 top-[68px] flex max-h-[calc(100vh_-_76px)] flex-col overflow-y-auto bg-[#111] px-[5vw] py-6 lg:hidden"
        >
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              aria-current={isActive(pathname, item.to) ? 'page' : undefined}
              className={`border-b border-white/10 py-3.5 text-sm font-bold ${
                isActive(pathname, item.to) ? 'text-gold' : ''
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link to={cta.to} className="btn btn-gold mt-6">
            {cta.label}
          </Link>
        </nav>
      )}
    </header>
  );
}

/** A menüpont aktív, ha az aktuális útvonal alá tartozik. */
function isActive(pathname: string, to: string): boolean {
  const base = to.split('#')[0];
  if (base === '/') return pathname === '/';
  return pathname === base || pathname.startsWith(`${base}/`);
}

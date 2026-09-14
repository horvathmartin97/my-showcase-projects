import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { LEGACY_HASH_ROUTES } from './legacyRoutes';

/**
 * Két dolgot végez el:
 *  – a régi egyoldalas horgonyokat (`/#apple`) átirányítja az új aloldalra,
 *  – utána a #horgonyra görget, amit a router önmagában nem tesz meg.
 */
export default function useHashScroll() {
  const { pathname, hash } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const id = hash ? decodeURIComponent(hash.slice(1)) : '';

    // Régi link a főoldal horgonyára → új útvonal.
    if (pathname === '/' && id && LEGACY_HASH_ROUTES[id]) {
      const target = LEGACY_HASH_ROUTES[id];
      if (target !== `/#${id}`) {
        navigate(target, { replace: true });
        return;
      }
    }

    if (!id) {
      window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }

    const frame = requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ block: 'start' });
    });

    return () => cancelAnimationFrame(frame);
  }, [pathname, hash, navigate]);
}

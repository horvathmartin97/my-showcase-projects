import { Outlet } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
import MobileCall from './MobileCall';
import { ZoomProvider } from './Zoom';
import useHashScroll from '../lib/useHashScroll';

export default function RootLayout() {
  useHashScroll();

  return (
    <ZoomProvider>
      <div id="top" className="max-sm:pb-[50px]">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-gold focus:px-4 focus:py-2 focus:text-ink"
        >
          Ugrás a tartalomra
        </a>
        <Nav />
        <main id="main">
          <Outlet />
        </main>
        <Footer />
        <MobileCall />
      </div>
    </ZoomProvider>
  );
}

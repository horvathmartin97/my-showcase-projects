import { Navigate, Route, Routes } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import HomePage from './pages/HomePage';
import ModellekPage from './pages/ModellekPage';
import AppleCabin40Page from './pages/AppleCabin40Page';
import AppleCabin20Page from './pages/AppleCabin20Page';
import Lumina35Page from './pages/Lumina35Page';
import Natura35Page from './pages/Natura35Page';
import Expand30Page from './pages/Expand30Page';
import Family40Page from './pages/Family40Page';
import Grand70Page from './pages/Grand70Page';
import AlaprajzokPage from './pages/AlaprajzokPage';
import SzemelyreSzabasPage from './pages/SzemelyreSzabasPage';
import ExtrakPage from './pages/ExtrakPage';
import IrodaiPage from './pages/IrodaiPage';
import GyartasPage from './pages/GyartasPage';
import TelepitesPage from './pages/TelepitesPage';
import AjanlatkeresPage from './pages/AjanlatkeresPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<HomePage />} />

        <Route path="modellek" element={<ModellekPage />} />
        <Route path="modellek/apple-cabin-40" element={<AppleCabin40Page />} />
        <Route path="modellek/apple-cabin-20" element={<AppleCabin20Page />} />
        <Route path="modellek/lumina-35" element={<Lumina35Page />} />
        <Route path="modellek/natura-35" element={<Natura35Page />} />
        <Route path="modellek/expand-30" element={<Expand30Page />} />
        <Route path="modellek/family-40" element={<Family40Page />} />
        <Route path="modellek/grand-70" element={<Grand70Page />} />

        <Route path="alaprajzok" element={<AlaprajzokPage />} />
        <Route path="szemelyre-szabas" element={<SzemelyreSzabasPage />} />
        <Route path="extrak" element={<ExtrakPage />} />
        <Route path="irodai-megoldasok" element={<IrodaiPage />} />
        <Route path="gyartas" element={<GyartasPage />} />
        <Route path="telepites" element={<TelepitesPage />} />
        <Route path="ajanlatkeres" element={<AjanlatkeresPage />} />

        {/* A régi oldal útvonalai */}
        <Route path="ketszintes" element={<Navigate to="/modellek/grand-70" replace />} />
        <Route path="index.html" element={<Navigate to="/" replace />} />
        <Route path="ketszintes.html" element={<Navigate to="/modellek/grand-70" replace />} />
        <Route path="telepites.html" element={<Navigate to="/telepites" replace />} />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

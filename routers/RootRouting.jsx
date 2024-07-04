import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import Loader from '../src/components/Loader/Loader';

const HomePage = lazy(() => import('../src/pages/HomePage/HomePage'));
const CampersPage = lazy(() => import('../src/pages/CampersPage/CampersPage'));
const FavoritePage = lazy(() => import('../src/pages/FavoritePage/FavoritePage'));
const NotFoundPage = lazy(() => import('../src/pages/NotFoundPage/NotFoundPage'));

const RootRouting = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/campers" element={<CampersPage />} />
        <Route path="/favorite" element={<FavoritePage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default RootRouting;

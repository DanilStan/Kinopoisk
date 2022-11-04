import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('pages/Home/Home'));
const MoviesPage = lazy(() => import('pages/MoviesPage/MoviesPage'));
const Layout = lazy(() => import('./Layout/Layout'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <>
      <Layout>
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </Layout>
    </>
  );
};

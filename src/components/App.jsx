import NotFound from 'pages/NotFound';
import { Route, Routes } from 'react-router-dom';
import { Container } from './App.styled';
import { lazy, Suspense } from 'react';
import HeaderPart from './HeaderPart/HeaderPart';
const Cast = lazy(() => import('./Cast/Cast' /* webpackChunkName: "Cast" */));
const Home = lazy(() => import('../pages/Home' /* webpackChunkName: "Home" */));
const MovieDetails = lazy(() =>
  import(
    '../pages/MovieDetails/MovieDetails' /* webpackChunkName: "MovieDetails" */
  )
);
const Movies = lazy(() =>
  import('../pages/Movies' /* webpackChunkName: "Movies" */)
);
const Reviews = lazy(() =>
  import('./Reviews/Reviews' /* webpackChunkName: "Reviews" */)
);

export const App = () => {
  return (
    <Container>
      <HeaderPart />

      <Suspense fallback={<NotFound />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path={'/movies/:movieId/'} element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Container>
  );
};

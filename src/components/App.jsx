import NotFound from 'pages/NotFound';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Container, Header, Link } from './App.styled';
import { lazy, Suspense, useRef } from 'react';
import s from './app.module.css';
const Cast = lazy(() => import('../pages/Cast' /* webpackChunkName: "Cast" */));
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
  import('../pages/Reviews' /* webpackChunkName: "Reviews" */)
);

export const App = () => {
  const location = useLocation();
  const refContainer = useRef(null);
  refContainer.current = location.state?.from ?? '/';

  return (
    <Container>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/Movies">Movies</Link>
        </nav>
      </Header>
      {location.pathname !== '/' && (
        <Link to={refContainer.current} className={s.buttonBack}>
          Go back
        </Link>
      )}
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

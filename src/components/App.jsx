import Home from 'pages/Home';
import MovieDetails from 'pages/MovieDetails';
import Movies from 'pages/Movies';
import { Route, Routes } from 'react-router-dom';
import { Cast } from './Cast/Cast';
import { GlobalStyle } from './GlobalStyle/GlobalStyle';
import { Navigaion } from './Navigation/Navigation';
import { Reviews } from './Reviews/Reviewe';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigaion />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
      <GlobalStyle />
    </div>
  );
};

import Home from 'pages/Home';
import MovieDetails from 'pages/MovieDetails';
import Movies from 'pages/Movies';
import { Route, Routes } from 'react-router-dom';
import { Navigaion } from './Navigation/Navigation';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigaion />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
        </Route>
      </Routes>
    </div>
  );
};

import { MoviesList } from 'components/MovieList/MovieList';
import { useEffect, useState } from 'react';
import { getTrendingMovies } from 'utils/MoviesAPI';

const Home = () => {
  const [movies, getMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(getMovies);
  }, []);

  return (
    <div>
      <MoviesList movies={movies} />
    </div>
  );
};

export default Home;

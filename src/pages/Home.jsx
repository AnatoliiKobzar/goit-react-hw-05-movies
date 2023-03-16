import { Loader } from 'components/Loader/Loader';
import MoviesList from 'components/MovieList/MovieList';
import { useEffect, useState } from 'react';
import { getTrendingMovies } from 'utils/MoviesAPI';

const Home = () => {
  const [movies, getMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getTrendingMovies()
      .then(getMovies)
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return <div>{loading ? <Loader /> : <MoviesList movies={movies} />}</div>;
};

export default Home;

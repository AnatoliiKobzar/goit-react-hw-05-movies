import { MoviesList } from 'components/MovieList/MovieList';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMoviesByQuery } from 'utils/MoviesAPI';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [params, setParams] = useSearchParams();
  const query = params.get('query');

  useEffect(() => {
    if (!query) {
      return;
    }

    getMoviesByQuery(query).then(setMovies);
  }, [query]);

  const handleSubmit = event => {
    event.preventDefault();
    setParams({ query: event.target.query.value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" />
        <button type="submit">Search</button>
      </form>
      <MoviesList movies={movies} />
    </div>
  );
};

export default Movies;

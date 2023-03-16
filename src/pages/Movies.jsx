import { Loader } from 'components/Loader/Loader';
import MoviesList from 'components/MovieList/MovieList';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMoviesByQuery } from 'utils/MoviesAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [params, setParams] = useSearchParams();
  const query = params.get('query');
  const [value, setValue] = useState(query ?? '');

  useEffect(() => {
    if (!query) {
      return;
    }
    setLoading(true);
    getMoviesByQuery(query)
      .then(movies => {
        if (movies.length === 0) {
          toast.warning('Nothing found for your request!', {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
        return setMovies(movies);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [query]);

  const handleSubmit = event => {
    event.preventDefault();
    setParams({ query: event.target.query.value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="query"
          value={value}
          onChange={event => {
            setValue(event.target.value);
          }}
        />{' '}
        <button type="submit">Search</button>
      </form>
      {loading ? <Loader /> : <MoviesList movies={movies} />}
      <ToastContainer />
    </div>
  );
};

export default Movies;

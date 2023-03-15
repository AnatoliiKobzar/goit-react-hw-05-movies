import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesDetails } from 'utils/MoviesAPI';

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500/';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  console.log(movieId);

  useEffect(() => {
    getMoviesDetails(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <button type="button">Go back</button>
      <h1>{movie.title}</h1>
      <img src={BASE_IMG_URL + movie.poster_path} alt={movie.title} />
    </div>
  );
};

export default MovieDetails;

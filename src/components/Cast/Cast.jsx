import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesCredits } from 'utils/MoviesAPI';

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w200/';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMoviesCredits(movieId).then(setCast);
  }, [movieId]);

  return (
    <div>
      <h2>Cast</h2>
      <ul>
        {cast.map(actor => {
          return (
            <li key={actor.cast_id}>
              <img
                src={BASE_IMG_URL + actor.profile_path}
                alt={actor.original_name}
              />
              <h2>{actor.original_name}</h2>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

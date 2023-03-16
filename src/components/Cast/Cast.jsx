import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesCredits } from 'utils/MoviesAPI';
import { CatsImg, CatsList } from './Cats.styled';
import DefaultImg from '../../images/cast-img.jpg';

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w400/';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMoviesCredits(movieId).then(setCast);
  }, [movieId]);

  return (
    <div>
      <h2>Cast</h2>
      <CatsList>
        {cast.map(actor => {
          return (
            <li key={actor.cast_id}>
              <CatsImg
                src={
                  actor.profile_path
                    ? BASE_IMG_URL + actor.profile_path
                    : DefaultImg
                }
                alt={actor.original_name}
              />
              <h3>{actor.original_name}</h3>
            </li>
          );
        })}
      </CatsList>
    </div>
  );
};

export default Cast;

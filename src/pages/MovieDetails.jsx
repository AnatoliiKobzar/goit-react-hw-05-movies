import { Link } from 'components/Navigation/Navigation.styled';
import { Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { getMoviesDetails } from 'utils/MoviesAPI';
import defaultImg from '../images/movie-pic.jpg';
import { Button, Wrap, WrapBtn } from './MovieDetails.styled';

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w300/';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    getMoviesDetails(movieId).then(setMovie);
  }, [movieId]);

  const handelGoBack = () => {
    navigate(location?.state?.from ?? '/');
  };

  if (!movie) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Button type="button" onClick={handelGoBack}>
        Go back
      </Button>
      <Wrap>
        <img
          src={
            movie.poster_path ? BASE_IMG_URL + movie.poster_path : defaultImg
          }
          alt={movie.title}
        />
        <div>
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>
          <WrapBtn>
            <Link state={{ from: location?.state?.from ?? '/' }} to="cast">
              Cast
            </Link>
            <Link state={{ from: location?.state?.from ?? '/' }} to="reviews">
              Reviews
            </Link>
          </WrapBtn>
        </div>
      </Wrap>

      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;

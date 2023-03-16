import { useLocation } from 'react-router-dom';
import { Item, ItemLink, List } from './MovieList.styled';
import defaultImg from '../../images/movie-pic.jpg';

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w300/';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <List>
      {movies.map(movie => (
        <Item key={movie.id}>
          <ItemLink state={{ from: location }} to={`/movies/${movie.id}`}>
            <img
              src={
                movie.poster_path
                  ? BASE_IMG_URL + movie.poster_path
                  : defaultImg
              }
              alt={movie.title ?? movie.name}
            />
            <h3>{movie.title ?? movie.name}</h3>
          </ItemLink>
        </Item>
      ))}
    </List>
  );
};

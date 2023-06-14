import { Link } from 'react-router-dom';

export const MovieList = ({ movies }) => {
  return (
    <>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`}>{movie.title || movie.name}</Link>
        </li>
      ))}
    </>
  );
};

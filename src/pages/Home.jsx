import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import apiGet from '../api';

export default function Home() {
  const [movies, setMovie] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const movie = await apiGet.popular();
        setMovie(movie);
      } catch (error) {
        console.error(error.message);
      }
    })();
  }, []);

  return (
    <div>
      <h1>Trending Movies</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title || movie.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

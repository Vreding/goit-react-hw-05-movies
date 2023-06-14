import { useEffect, useState } from 'react';
import apiGet from '../api';
import { MovieList } from 'components/MovieList/MovieList';

export default function Home() {
  const [movies, setMovie] = useState([]);

  useEffect(() => {
    const fetchTrends = async () => {
      try {
        const movie = await apiGet.popular();
        setMovie(movie);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchTrends();
  }, []);

  return (
    <div>
      <h1>Trending Movies</h1>
      <MovieList movies={movies} />
    </div>
  );
}

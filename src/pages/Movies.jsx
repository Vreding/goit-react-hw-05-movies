import React, { useEffect, useState } from 'react';
import Searchbar from 'components/SearchBar/SearchBar';
import apiGet from '../api';
import { Link } from 'react-router-dom';

export default function Movie() {
  const [searchMovie, setSearchMovie] = useState('');
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const onChangeQuery = newSearchMovie => {
    if (newSearchMovie.trim() === '' || newSearchMovie === searchMovie) {
      return;
    }

    setSearchMovie(newSearchMovie);
  };

  useEffect(() => {
    if (searchMovie) {
      (async () => {
        try {
          setLoading(true);
          const movieList = await apiGet.getMovieByName(searchMovie);
          setMovieList(movieList);
        } catch (error) {
          console.error(error.message);
          setError(true);
        } finally {
          setLoading(false);
        }
      })();
    }
  }, [searchMovie]);

  return (
    <>
      <Searchbar onSubmit={onChangeQuery} />
      {error && <b>OOPS, ERROR!</b>}
      {loading && <b>Loading Movies</b>}
      {movieList.length > 0 && (
        <>
          <h1>Movie List</h1>
          <ul>
            {movieList.map(movie => (
              <li key={movie.id}>
                <Link to={`${movie.id}`}>{movie.title || movie.name}</Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}

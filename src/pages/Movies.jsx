import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Searchbar from 'components/SearchBar/SearchBar';
import apiGet from '../api';
import { Link } from 'react-router-dom';

export default function Movie() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  // const [searchMovie, setSearchMovie] = useState('');
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const onChangeQuery = newSearchMovie => {
    if (newSearchMovie.trim() === '' || newSearchMovie === searchParams) {
      return;
    }

    setSearchParams({ query: newSearchMovie });
  };

  useEffect(() => {
    if (query !== null) {
      (async () => {
        try {
          setLoading(true);
          const movieList = await apiGet.getMovieByName(query);
          setMovieList(movieList);
        } catch (error) {
          console.error(error.message);
          setError(true);
        } finally {
          setLoading(false);
        }
      })();
    }
  }, [query]);

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

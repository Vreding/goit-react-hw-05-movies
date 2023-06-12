import React, { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import apiGet from '../../api';
import s from './MovieDetails.module.css';

export default function MoviesDetails() {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movieDetails = await apiGet.movieById(movieId);
        setMovieInfo(movieDetails);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, [movieId]);

  return (
    <div className={s.MovieDetails_container}>
      {movieInfo && (movieInfo.title || movieInfo.name)}
      <Link to="cast">Cast</Link>
      <Link to="reviews">Reviews</Link>
      <Outlet />
    </div>
  );
}

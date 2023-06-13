import React, { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import apiGet from '../../api';
import s from './MovieDetails.module.css';
import placeholderImage from '../../servis/images.jpeg';

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
    <>
      {movieInfo && (
        <div className={s.MovieDetails_container}>
          <p>{movieInfo.title || movieInfo.name}</p>
          <img
            src={
              movieInfo.poster_path
                ? `https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`
                : placeholderImage
            }
            alt=""
            width={200}
            height={300}
          />
          <Link to="cast">Cast</Link>
          <Link to="reviews">Reviews</Link>
          <Outlet />
        </div>
      )}
    </>
  );
}

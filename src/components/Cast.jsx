import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import apiGet from '../api';

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const castDetails = await apiGet.getCast(movieId);
        setCast(castDetails);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchCast();
  }, [movieId]);

  return (
    <>
      {cast && (
        <>
          <h1>Cast</h1>
          <ul>
            {cast.map(actor => (
              <li key={actor.id}>
                <p>Actor: {actor.name}</p>
                <p>Role: {actor.character}</p>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};

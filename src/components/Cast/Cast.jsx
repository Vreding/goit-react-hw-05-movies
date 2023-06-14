import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import apiGet from '../../api';
import s from './Cast.module.css';
import placeholderImage from '../../servis/images.jpeg';

export default function Cast() {
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
    <div className={s.Cast_container}>
      {cast && (
        <>
          <h1 className={s.Cast_title}>Cast</h1>
          <ul className={s.Cast_list}>
            {cast.map(actor => (
              <li key={actor.id} className={s.Cast_item}>
                <p className={s.Cast_info}>Actor: {actor.name}</p>
                <p className={s.Cast_info}>Role: {actor.character}</p>
                <img
                  src={
                    actor.profile_path
                      ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                      : placeholderImage
                  }
                  alt=""
                  width={200}
                  height={300}
                />
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

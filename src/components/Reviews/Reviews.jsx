import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import apiGet from '../../api';
import s from './Reviews.module.css';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const movieReviews = await apiGet.getReviews(movieId);
        setReviews(movieReviews);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchReviews();
  }, [movieId]);

  if (!reviews) {
    return;
  }

  return (
    <>
      {reviews && reviews.length > 0 ? (
        <div className={s.Reviews_container}>
          <h1>Reviews</h1>
          <ul>
            {reviews.map(review => (
              <li key={review.id} className={s.Reviews_item}>
                <p>Author: {review.author}</p>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className={s.Reviews_container}>No reviews</div>
      )}
    </>
  );
}

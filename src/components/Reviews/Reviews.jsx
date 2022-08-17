import { useParams } from 'react-router';
import { movieReviewsApi } from 'Api/movieApi';
import { useEffect, useState } from 'react';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function FilmReviewsRequest() {
      await movieReviewsApi(movieId)
        .then(data => setReviews(data.results))
        .catch(error => console.log(error));
    }
    FilmReviewsRequest();
  }, [movieId]);

  return (
    <ul>
      {reviews.length === 0 ? (
        <h2>there is no reviews!</h2>
      ) : (
        reviews.map(el => {
          return (
            <li key={el.id}>
              <h3>{el.author}</h3>
              <p>{el.content}</p>
            </li>
          );
        })
      )}
    </ul>
  );
};

export default Reviews;

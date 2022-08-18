import { Link } from 'react-router-dom';

const MoreInfo = ({ movieId, locationState }) => {
  return (
    <ul>
      <li>
        <Link to={`/movies/${movieId}/cast`} state={locationState}>
          Cast
        </Link>
      </li>
      <li>
        <Link to={`/movies/${movieId}/reviews`} state={locationState}>
          Reviews
        </Link>
      </li>
    </ul>
  );
};

export default MoreInfo;

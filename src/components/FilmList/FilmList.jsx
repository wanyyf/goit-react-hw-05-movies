import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
const FilmList = ({ filmArray }) => {
  return (
    <ul>
      {filmArray.map(el => {
        return (
          <li key={el.id}>
            <Link to={`/movies/${el.id}`}>{el.original_title || el.name}</Link>
          </li>
        );
      })}
    </ul>
  );
};

FilmList.propTypes = {
  filmArray: propTypes.array.isRequired,
};
export default FilmList;

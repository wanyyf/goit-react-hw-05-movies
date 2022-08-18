import { Link, useLocation } from 'react-router-dom';
import propTypes from 'prop-types';
const FilmList = ({ filmArray }) => {
  const location = useLocation();
  console.log(location);
  return (
    <ul>
      {filmArray.map(el => {
        return (
          <li key={el.id}>
            <Link to={`/movies/${el.id}`} state={location}>
              {el.original_title || el.name}
            </Link>
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

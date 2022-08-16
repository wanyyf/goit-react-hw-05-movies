import { movieApi } from 'Api/movieApi';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);

  useEffect(() => {
    filmRequest();
  }, []);

  async function filmRequest() {
    await movieApi()
      .then(data => setTrendMovies(data.results))
      .catch(error => console.log(error));
  }
  return (
    <ul>
      {trendMovies.map(el => {
        return (
          <li key={el.id}>
            <Link to={`/movies/${el.id}`}>{el.original_title || el.name}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Home;

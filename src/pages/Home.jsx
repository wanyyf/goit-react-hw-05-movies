import { movieApi } from 'Api/movieApi';
import FilmList from 'components/FilmList/FilmList';
import { useEffect, useState } from 'react';

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
  return <FilmList filmArray={trendMovies} />;
};

export default Home;

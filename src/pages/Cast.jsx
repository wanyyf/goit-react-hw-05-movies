import { useParams } from 'react-router';
import { movieCreditsApi } from 'Api/movieApi';
import { useEffect, useState } from 'react';

const Cast = () => {
  const { movieId } = useParams();
  const [casts, setcasts] = useState([]);

  useEffect(() => {
    castsRequest();
  }, []);

  async function castsRequest() {
    await movieCreditsApi(movieId)
      .then(data => setcasts(data.cast))
      .catch(error => console.log(error));
  }

  return (
    <ul>
      {casts &&
        casts.map(el => {
          return (
            <li key={el.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${el.profile_path}`}
                alt={el.name}
                width="250"
              />
              <h3> Name: {el.name}</h3>
              <h4>Character: {el.character}</h4>
            </li>
          );
        })}
    </ul>
  );
};

export default Cast;

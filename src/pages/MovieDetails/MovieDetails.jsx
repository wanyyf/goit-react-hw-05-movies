import { useParams, useNavigate } from 'react-router-dom';
import { movieIdApi } from 'Api/movieApi';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import s from './movieDetails.module.css';

const MovieDetails = () => {
  const [filmInfo, setFilmInfo] = useState({});
  const { movieId } = useParams();
  const navigate = useNavigate();

  const goBack = () => navigate(-1);
  useEffect(() => {
    async function FilmInfoRequest() {
      await movieIdApi(movieId)
        .then(data => setFilmInfo(data))
        .catch(error => {
          setFilmInfo([]);
          console.log(error);
        });
    }
    FilmInfoRequest();
  }, [movieId]);

  const {
    poster_path,
    original_title,
    name,
    genres,
    release_date = '',
    vote_average,
    tagline,
  } = filmInfo;
  const imgSrc = `https://image.tmdb.org/t/p/w500/${poster_path}`;
  const releaseYear = release_date.split('').splice(0, 4).join('');
  const vote = vote_average * 10;
  return (
    <>
      <button className={s.buttonBack} onClick={goBack}>
        Go back
      </button>
      {filmInfo.length === 0 ? (
        <h2> We have no info about this film </h2>
      ) : (
        <>
          <div className={s.info}>
            <img src={imgSrc} alt={original_title} />
            <div className={s.infoAbout}>
              <h2 className={s.title}>
                {original_title || name} ({releaseYear})
              </h2>
              <h3>User score:</h3> <span>{vote.toFixed(0)}%</span>
              {tagline && (
                <>
                  <h3>Overview</h3>
                  <p>{tagline}</p>
                </>
              )}
              <h3>Genges</h3>
              <ul>
                {genres &&
                  genres.map(el => {
                    return <li key={el.id}>{el.name}</li>;
                  })}
              </ul>
            </div>
          </div>
          <h4>Additional information</h4>
          <ul>
            <li>
              <Link to={`/movies/${movieId}/cast`}> Cast</Link>
            </li>
            <li>
              <Link to={`/movies/${movieId}/reviews`}> Reviews</Link>
            </li>
          </ul>
          <hr />
          <Outlet />
        </>
      )}
    </>
  );
};

export default MovieDetails;

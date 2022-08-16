import { useState } from 'react';
import { movieSearchsApi } from 'Api/movieApi';
import { Link, useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
const Movies = () => {
  const [searchInput, setSearchInput] = useState('');
  const [searchFilms, setSearchFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get('query');
    if (query) {
      filmSearchRequest(query);
    }
  }, []);

  const onInputChange = evt => {
    const value = evt.target.value;

    setSearchInput(value);
  };
  const onSubmitForm = evt => {
    evt.preventDefault();
    setSearchParams({ query: searchInput });
    filmSearchRequest(searchInput);
  };

  async function filmSearchRequest(query) {
    await movieSearchsApi(query)
      .then(data => setSearchFilms(data.results))
      .catch(error => console.log(error));
  }

  return (
    <>
      <form onSubmit={onSubmitForm}>
        <input type="text" value={searchInput} onChange={onInputChange} />
        <button type="submit">Search</button>
      </form>
      {searchFilms.length > 0 && (
        <ul>
          {searchFilms.map(el => {
            return (
              <li key={el.id}>
                <Link to={`/movies/${el.id}`}>
                  {el.original_title || el.name}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Movies;

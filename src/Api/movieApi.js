const API_KEY = 'df75de766bc216630e148042dff14934';
export const movieApi = () => {
  return fetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`!!Error!!`));
  });
};
export const movieIdApi = id => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`!!Error!!`));
  });
};

export const movieCreditsApi = id => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`!!Error!!`));
  });
};
export const movieReviewsApi = id => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`!!Error!!`));
  });
};
export const movieSearchsApi = query => {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`!!Error!!`));
  });
};

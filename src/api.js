import axios from 'axios';

const API_KEY = '254171825383f2a3466dbbca546aa0a7';
const URL = 'https://api.themoviedb.org/3/trending/all/day';
const URL_SEARCH_BY_NAME = 'https://api.themoviedb.org/3/search/movie';
const URL_SEARCH_BY_ID = 'https://api.themoviedb.org/3/movie';

async function getPopularMovies() {
  axios.defaults.params = {
    api_key: API_KEY,
    language: 'en-US',
  };
  try {
    const { data } = await axios.get(`${URL}`);

    return data.results;
  } catch (error) {}
}

async function getMovieByName(name) {
  axios.defaults.params = {
    api_key: API_KEY,
    language: 'en-US',
    query: `${name}`,
  };
  try {
    const { data } = await axios.get(`${URL_SEARCH_BY_NAME}`);
    return data.results;
  } catch (error) {}
}

async function getMovieById(id) {
  axios.defaults.params = {
    api_key: API_KEY,
    language: 'en-US',
  };
  try {
    const { data } = await axios.get(`${URL_SEARCH_BY_ID}/${id}`);

    return data;
  } catch (error) {}
}

async function getMovieActorById(id) {
  axios.defaults.params = {
    api_key: API_KEY,
    language: 'en-US',
  };
  try {
    const { data } = await axios.get(`${URL_SEARCH_BY_ID}/${id}/credits`);
    return data.cast;
  } catch (error) {}
}

async function getMovieReviewsById(id) {
  axios.defaults.params = {
    api_key: API_KEY,
    language: 'en-US',
    page: 1,
  };
  try {
    const { data } = await axios.get(`${URL_SEARCH_BY_ID}/${id}/reviews`);
    return data.results;
  } catch (error) {}
}

const apiGet = {
  popular: getPopularMovies,
  movieById: getMovieById,
  getReviews: getMovieReviewsById,
  getCast: getMovieActorById,
  getMovieByName: getMovieByName,
};

export default apiGet;

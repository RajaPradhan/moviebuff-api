const axios = require('axios');
const _ = require('lodash');
const config = require('../config');

const API_KEY = config.tmdbApiKey;
const API_HOST = 'https://api.themoviedb.org';
const API_VERSION = '3';
const LANG = 'en-US';

// Helper method to form the complete URL with the query params
const getURL = (path, queryParams = {}) => {
  let url = `${API_HOST}/${API_VERSION}${path}?api_key=${API_KEY}&language=${LANG}`;
  _.forEach(_.keys(queryParams), key => {
      url += `&${key}=${queryParams[key]}`
  });

  return url;
};

// Gets all the movies for a particular category
const getMovies = async (type = now_playing, queryStr) => {
  const path = `/movie/${type}`;

  const response = await axios.get(getURL(path, queryStr));

  return {
    status: response.status,
    data: response.data
  };
};

// Gets movies based on search text entered in the search box
const getSearchResult = async (queryStr) => {
  const path = `/search/multi`;
  const queryParams = {
    ...queryStr,
    include_adult: true
  };

  const response = await axios.get(getURL(path, queryParams));

  return {
    status: response.status,
    data: response.data
  };
};

// Gets all the movie genres. Used for faceted search
const getMovieGenres = async () => {
  const path = `/genre/movie/list`;

  const response = await axios.get(getURL(path));

  return {
    status: response.status,
    data: response.data
  };
};

// Gets movies based on various filter criteria passed as query string
const refineMovies = async (queryStr) => {
  const path = `/discover/movie`;

  const response = await axios.get(getURL(path, queryStr));

  return {
    status: response.status,
    data: response.data
  };
};

// Gets details of a specific movie identified by the movieId
const getMovieDetails = async (movieId) => {
  const path = `/movie/${movieId}`;

  const response = await axios.get(getURL(path));

  return {
    status: response.status,
    data: response.data
  };
};


module.exports = {
  getMovies,
  getSearchResult,
  getMovieGenres,
  refineMovies,
  getMovieDetails
};

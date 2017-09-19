const movieServices = require('./movieServices');

const sendJSONResponse = (res, result) => {
    res.status(result.status);
    res.json(result.data);
};

const getNowPlayingMovies = async (req, res) => {
  const result = await movieServices.getMovies('now_playing', req.query);
  sendJSONResponse(res, result);
};

const getPopularMovies = async (req, res) => {
  const result = await movieServices.getMovies('popular', req.query);
  sendJSONResponse(res, result);
};

const getTopRatedMovies = async (req, res) => {
  const result = await movieServices.getMovies('top_rated', req.query);
  sendJSONResponse(res, result);
};

const getUpcomingMovies = async (req, res) => {
  const result = await movieServices.getMovies('upcoming', req.query);
  sendJSONResponse(res, result);
};

const getSearchResult = async (req, res) => {
  const result = await movieServices.getSearchResult(req.query);
  sendJSONResponse(res, result);
};

const getMovieGenres = async (req, res) => {
  const result = await movieServices.getMovieGenres();
  sendJSONResponse(res, result);
};

const refineMovies = async (req, res) => {
  const genres = req.query.genres;
  const result = await movieServices.refineMovies(req.query);
  sendJSONResponse(res, result);
};

const getMovieDetails = async (req, res) => {
  const movieId = req.params.id;
  const result = await movieServices.getMovieDetails(movieId);
  sendJSONResponse(res, result);
};

module.exports = {
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
  getSearchResult,
  getMovieGenres,
  refineMovies,
  getMovieDetails
};

// This file handles routing for tmdb API calls
const movieControllers = require('./movieControllers');

module.exports = app => {
  app.get(
    '/api/v1/movies/now-playing',
    movieControllers.getNowPlayingMovies
  );

  app.get(
    '/api/v1/movies/popular',
    movieControllers.getPopularMovies
  );

  app.get(
    '/api/v1/movies/top-rated',
    movieControllers.getTopRatedMovies
  );

  app.get(
    '/api/v1/movies/upcoming',
    movieControllers.getUpcomingMovies
  );

  app.get(
    '/api/v1/movies/search',
    movieControllers.getSearchResult
  );

  app.get(
    '/api/v1/movies/genres',
    movieControllers.getMovieGenres
  );

  app.get(
    '/api/v1/movies/refine',
    movieControllers.refineMovies
  );

  app.get(
    '/api/v1/movies/:id',
    movieControllers.getMovieDetails
  );
};

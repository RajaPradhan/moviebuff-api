// This file handles routing for tmdb API calls
const movieControllers = require('./movieControllers');

module.exports = app => {
  app.get(
    '/movies/now-playing',
    movieControllers.getNowPlayingMovies
  );

  app.get(
    '/movies/popular',
    movieControllers.getPopularMovies
  );

  app.get(
    '/movies/top-rated',
    movieControllers.getTopRatedMovies
  );

  app.get(
    '/movies/upcoming',
    movieControllers.getUpcomingMovies
  );

  app.get(
    '/movies/search',
    movieControllers.getSearchResult
  );

  app.get(
    '/movies/genres',
    movieControllers.getMovieGenres
  );

  app.get(
    '/movies/refine',
    movieControllers.refineMovies
  );

  app.get(
    '/movies/:id',
    movieControllers.getMovieDetails
  );
};

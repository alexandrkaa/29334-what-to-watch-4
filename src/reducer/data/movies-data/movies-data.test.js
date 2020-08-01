import {reducer, ActionCreator, ActionTypes, Operation} from './movies-data.js';
import MockAdapter from 'axios-mock-adapter';
import createAPI from '../../../api/api.js';
import movieAdapter from '../../../adapters/movie/movie-adapter.js';

const api = createAPI(() => {});

const moviesList = [
  {
    id: 4,
    image: `img/we-need-to-talk-about-kevin.jpg`,
    movieBackground: `img/bg-the-grand-budapest-hotel.jpg`,
    movieDate: `2000`,
    movieDescription: `In the 1930s, the Grand Budapest Hotel is a popula…y boy, becomes Gustave&apos;s friend and protege.`,
    movieDirector: `Wes Anderson`,
    movieGenre: `Thriller`,
    movieImage: `img/the-grand-budapest-hotel-poster.jpg`,
    movieRatingCount: `349 ratings`,
    movieRatingLevel: `Bad`,
    movieRatingScore: `3`,
    movieStarring: [`Jude Law`, `Willem Dafoe`],
    title: `Dardjeeling Limited`,
    moviePreview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    backgroundColor: `#000000`,
  },
  {
    id: 3,
    image: `img/aviator.jpg`,
    movieBackground: `img/bg-the-grand-budapest-hotel.jpg`,
    movieDate: `2008`,
    movieDescription: `In the 1930s, the Grand Budapest Hotel is a popula…y boy, becomes Gustave&apos;s friend and protege.`,
    movieDirector: `Christopher Nolan`,
    movieGenre: `Kids & Family`,
    movieImage: `img/the-grand-budapest-hotel-poster.jpg`,
    movieRatingCount: `272 ratings`,
    movieRatingLevel: `Normal`,
    movieRatingScore: `2`,
    movieStarring: [`Jude Law`, `Willem Dafoe`],
    title: `Johnny English`,
    moviePreview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    backgroundColor: `#000000`,
  }
];

const titleMovie = {
  id: 3,
  image: `img/aviator.jpg`,
  movieBackground: `img/bg-the-grand-budapest-hotel.jpg`,
  movieDate: `2008`,
  movieDescription: `In the 1930s, the Grand Budapest Hotel is a popula…y boy, becomes Gustave&apos;s friend and protege.`,
  movieDirector: `Christopher Nolan`,
  movieGenre: `Kids & Family`,
  movieImage: `img/the-grand-budapest-hotel-poster.jpg`,
  movieRatingCount: `272 ratings`,
  movieRatingLevel: `Normal`,
  movieRatingScore: `2`,
  movieStarring: [`Jude Law`, `Willem Dafoe`],
  title: `Johnny English`,
  moviePreview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  backgroundColor: `#000000`,
};

describe(`MoviesData reducer works correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      loadingMovies: false,
      loadingMoviesError: false,
      moviesList: [],
      loadingTitleMovie: false,
      loadingTitleMovieError: false,
      titleMovie: {},
      loadingUserFavoriteList: false,
      updateUserFavoriteListError: false,
    });
  });

  it(`Should MoviesData reducer fetch movies data`, () => {
    expect(reducer({
      loadingMovies: false,
    }, {
      type: `FETCH_MOVIES_DATA`,
    })).toEqual({
      loadingMovies: true,
    });
  });

  it(`Should MoviesData reducer fetch movies data success`, () => {
    expect(reducer({
      loadingMovies: true,
      moviesList: [],
    }, {
      type: `FETCH_MOVIES_DATA_SUCCESS`,
      payload: moviesList
    })).toEqual({
      loadingMovies: false,
      moviesList,
    });
  });

  it(`Should MoviesData reducer fetch movies data error`, () => {
    expect(reducer({
      loadingMovies: true,
      loadingMoviesError: false,
    }, {
      type: `FETCH_MOVIES_DATA_ERROR`,
    })).toEqual({
      loadingMovies: false,
      loadingMoviesError: true,
    });
  });

  it(`Should MoviesData reducer fetch title movie`, () => {
    expect(reducer({
      loadingTitleMovie: false,
      loadingTitleMovieError: false,
    }, {
      type: `FETCH_TITLE_MOVIE`,
    })).toEqual({
      loadingTitleMovie: true,
      loadingTitleMovieError: false,
    });
  });

  it(`Should MoviesData reducer fetch title movie success`, () => {
    expect(reducer({
      loadingTitleMovie: true,
      titleMovie: {},
    }, {
      type: `FETCH_TITLE_MOVIE_SUCCESS`,
      payload: titleMovie,
    })).toEqual({
      loadingTitleMovie: false,
      titleMovie,
    });
  });

  it(`Should MoviesData reducer fetch title movie error`, () => {
    expect(reducer({
      loadingTitleMovie: true,
      loadingTitleMovieError: false,
    }, {
      type: `FETCH_TITLE_MOVIE_ERROR`,
    })).toEqual({
      loadingTitleMovie: false,
      loadingTitleMovieError: true,
    });
  });

  it(`Should MoviesData reducer fetch user favorite list`, () => {
    expect(reducer({
      loadingUserFavoriteList: false,
      updateUserFavoriteListError: false,
    }, {
      type: `FETCH_USER_FAVORITE_LIST`,
    })).toEqual({
      loadingUserFavoriteList: true,
      updateUserFavoriteListError: false,
    });
  });

  it(`Should MoviesData reducer update user favorite list success`, () => {
    expect(reducer({
      loadingUserFavoriteList: false,
      moviesList
    }, {
      type: `UPDATE_USER_FAVORITE_LIST_SUCCESS`,
      payload: [moviesList[0]]
    })).toEqual({
      loadingUserFavoriteList: false,
      moviesList
    });
  });

  it(`Should MoviesData reducer update user favorite list error`, () => {
    expect(reducer({
      updateUserFavoriteListError: false,
      loadingUserFavoriteList: true,
    }, {
      type: `UPDATE_USER_FAVORITE_LIST_ERROR`,
    })).toEqual({
      updateUserFavoriteListError: true,
      loadingUserFavoriteList: false,
    });
  });
});

describe(`MoviesData action creators work correctly`, () => {
  it(`Action creator fetch movies data returns correct action`, () => {
    expect(ActionCreator.fetchMoviesData()).toEqual({
      type: ActionTypes.FETCH_MOVIES_DATA,
    });
  });

  it(`MoviesData action creator fetch movies data success returns correct action`, () => {
    expect(ActionCreator.fetchMoviesDataSuccess(moviesList)).toEqual({
      type: ActionTypes.FETCH_MOVIES_DATA_SUCCESS,
      payload: moviesList
    });
  });

  it(`MoviesData action creator fetch movies data error returns correct action`, () => {
    expect(ActionCreator.fetchMoviesDataError()).toEqual({
      type: ActionTypes.FETCH_MOVIES_DATA_ERROR,
    });
  });

  it(`MoviesData action creator fetch title movie returns correct action`, () => {
    expect(ActionCreator.fetchTitleMovie()).toEqual({
      type: ActionTypes.FETCH_TITLE_MOVIE,
    });
  });

  it(`MoviesData action creator fetch title movie success returns correct action`, () => {
    expect(ActionCreator.fetchTitleMovieSuccess(titleMovie)).toEqual({
      type: ActionTypes.FETCH_TITLE_MOVIE_SUCCESS,
      payload: titleMovie
    });
  });

  it(`MoviesData action creator fetch title movie error returns correct action`, () => {
    expect(ActionCreator.fetchTitleMovieError()).toEqual({
      type: ActionTypes.FETCH_TITLE_MOVIE_ERROR,
    });
  });

  it(`MoviesData action creator fetch user favorite list returns correct action`, () => {
    expect(ActionCreator.fetchUserFavoriteList()).toEqual({
      type: ActionTypes.FETCH_USER_FAVORITE_LIST,
    });
  });

  it(`MoviesData action creator update user favorite list success returns correct action`, () => {
    expect(ActionCreator.updateUserFavoriteListSuccess({id: 1, title: `Some movie title`})).toEqual({
      type: ActionTypes.UPDATE_USER_FAVORITE_LIST_SUCCESS,
      payload: {id: 1, title: `Some movie title`}
    });
  });

  it(`MoviesData action creator fetch user favorite list error returns correct action`, () => {
    expect(ActionCreator.updateUserFavoriteListError()).toEqual({
      type: ActionTypes.UPDATE_USER_FAVORITE_LIST_ERROR,
    });
  });
});

describe(`MoviesData Operation works correctly`, () => {
  const movies = [{
    [`id`]: 1,
    [`name`]: `The Grand Budapest Hotel`,
    [`poster_image`]: `img/the-grand-budapest-hotel-poster.jpg`,
    [`preview_image`]: `img/the-grand-budapest-hotel.jpg`,
    [`background_image`]: `img/the-grand-budapest-hotel-bg.jpg`,
    [`background_color`]: `#ffffff`,
    [`video_link`]: `https://some-link`,
    [`preview_video_link`]: `https://some-link`,
    [`description`]: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
    [`rating`]: 8.9,
    [`scores_count`]: 240,
    [`director`]: `Wes Andreson`,
    [`starring`]: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
    [`run_time`]: 99,
    [`genre`]: `Comedy`,
    [`released`]: 2014,
    [`is_favorite`]: false
  }];
  it(`Operation fetch movies data works correctly`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const moviesLoader = Operation.fetchMoviesData();

    apiMock
      .onGet(`/films`)
      .reply(200, movies);

    return moviesLoader(dispatch, () => {}, api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenCalledWith({
        type: ActionTypes.FETCH_MOVIES_DATA_SUCCESS,
        payload: [movieAdapter(movies[0])],
      });
    });
  });

  it(`Operation fetch title movie data works correctly`, () => {
    const [movie] = movies;
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const moviesLoader = Operation.fetchTitleMovie();

    apiMock
      .onGet(`/films/promo`)
      .reply(200, movie);

    return moviesLoader(dispatch, () => {}, api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenCalledWith({
        type: ActionTypes.FETCH_TITLE_MOVIE_SUCCESS,
        payload: movieAdapter(movie),
      });
    });
  });

  it(`Operation fetch user favorite list data works correctly`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const moviesLoader = Operation.fetchUserFavoriteListData();

    apiMock
      .onGet(`/favorite`)
      .reply(200, movies);

    return moviesLoader(dispatch, () => {}, api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenCalledWith({
        type: ActionTypes.UPDATE_USER_FAVORITE_LIST_SUCCESS,
        payload: [movieAdapter(movies[0])],
      });
    });
  });

  it(`Operation post to user favorite data works correctly`, () => {
    const movie = movies[0];
    const movieId = 1;
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const moviesLoader = Operation.postToUserFavoriteList(movieId);

    apiMock
      .onPost(`/favorite/${movieId}/1`)
      .reply(200, movie);

    return moviesLoader(dispatch, () => {}, api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenCalledWith({
        type: ActionTypes.UPDATE_USER_FAVORITE_LIST_SUCCESS,
        payload: [movieAdapter(movies[0])],
      });
    });
  });

  it(`Operation remove from user favorite data works correctly`, () => {
    const movie = movies[0];
    const movieId = 1;
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const moviesLoader = Operation.removeFromUserFavoriteList(movieId);

    apiMock
      .onPost(`/favorite/${movieId}/0`)
      .reply(200, movie);

    return moviesLoader(dispatch, () => {}, api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenCalledWith({
        type: ActionTypes.UPDATE_USER_FAVORITE_LIST_SUCCESS,
        payload: [movieAdapter(movie)],
      });
    });
  });
});


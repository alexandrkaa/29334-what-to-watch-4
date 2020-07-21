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

describe(`Reducer works correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      loadingMovies: false,
      loadingMoviesError: false,
      loadingTitleMovie: false,
      moviesList: [],
      titleMovie: {},
    });
  });

  it(`Should reducer fetch movies data`, () => {
    expect(reducer({
      loadingMovies: false,
      loadingTitleMovie: false,
      moviesList: [],
      titleMovie: {},
    }, {
      type: `FETCH_MOVIES_DATA`,
    })).toEqual({
      loadingMovies: true,
      loadingTitleMovie: false,
      moviesList: [],
      titleMovie: {},
    });
  });

  it(`Should reducer fetch movies data success`, () => {
    expect(reducer({
      loadingMovies: true,
      loadingTitleMovie: false,
      moviesList: [],
      titleMovie: {},
    }, {
      type: `FETCH_MOVIES_DATA_SUCCESS`,
      payload: moviesList
    })).toEqual({
      loadingMovies: false,
      loadingTitleMovie: false,
      moviesList,
      titleMovie: {},
    });
  });

  it(`Should reducer fetch title movie`, () => {
    expect(reducer({
      loadingMovies: false,
      loadingTitleMovie: false,
      moviesList: [],
      titleMovie: {},
    }, {
      type: `FETCH_TITLE_MOVIE`,
    })).toEqual({
      loadingMovies: false,
      loadingTitleMovie: true,
      moviesList: [],
      titleMovie: {},
    });
  });

  it(`Should reducer fetch title movie success`, () => {
    expect(reducer({
      loadingMovies: false,
      loadingTitleMovie: true,
      moviesList: [],
      titleMovie: {},
    }, {
      type: `FETCH_TITLE_MOVIE_SUCCESS`,
      payload: titleMovie,
    })).toEqual({
      loadingMovies: false,
      loadingTitleMovie: false,
      moviesList: [],
      titleMovie,
    });
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator fetch movies data returns correct action`, () => {
    expect(ActionCreator.fetchMoviesData()).toEqual({
      type: ActionTypes.FETCH_MOVIES_DATA,
    });
  });

  it(`Action creator fetch movies data success returns correct action`, () => {
    expect(ActionCreator.fetchMoviesDataSuccess(moviesList)).toEqual({
      type: ActionTypes.FETCH_MOVIES_DATA_SUCCESS,
      payload: moviesList
    });
  });

  it(`Action creator fetch title movie returns correct action`, () => {
    expect(ActionCreator.fetchTitleMovie()).toEqual({
      type: ActionTypes.FETCH_TITLE_MOVIE,
    });
  });

  it(`Action creator fetch title movie success returns correct action`, () => {

    expect(ActionCreator.fetchTitleMovieSuccess(titleMovie)).toEqual({
      type: ActionTypes.FETCH_TITLE_MOVIE_SUCCESS,
      payload: titleMovie
    });
  });
});

describe(`Operation works correctly`, () => {
  it(`Operation fetch movies data works correctly`, () => {
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
});


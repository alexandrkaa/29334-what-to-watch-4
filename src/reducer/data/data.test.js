import {reducer, ActionCreator, ActionTypes} from './data.js';

const comments = [{
  author: `Alessio Parkes`,
  date: `11.03.2009`,
  id: 1000,
  movieId: 1,
  rating: 4,
  text: `And all the clouds that lour'd upon our house. In the deep bosom of the ocean buried. Now are our brows bound with victorious wreaths Our bruised arms hung up for monuments Our stern alarums changed to merry meetings. Our dreadful marches to delightful measures Grim-visaged war hath smooth'd his wrinkled front And now, instead of mounting barded steeds. To fright the souls of fearful adversaries He capers nimbly in a lady's chamber. To the lascivious pleasing of a lute But I, that am not shaped for sportive tricks, Nor made to court an amorous looking-glass`
}, {
  author: `Jordi Joseph`,
  date: `11.03.2009`,
  id: 1000,
  movieId: 2,
  rating: 4,
  text: `And all the clouds that lour'd upon our house. In the deep bosom of the ocean buried. Now are our brows bound with victorious wreaths Our bruised arms hung up for monuments Our stern alarums changed to merry meetings. Our dreadful marches to delightful measures Grim-visaged war hath smooth'd his wrinkled front And now, instead of mounting barded steeds. To fright the souls of fearful adversaries He capers nimbly in a lady's chamber. To the lascivious pleasing of a lute`
}];

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
      loadingComments: false,
      loadingTitleMovie: false,
      moviesList: [],
      titleMovie: {},
      moviesComments: [],
    });
  });

  it(`Should reducer fetch movies data`, () => {
    expect(reducer({
      loadingMovies: false,
      loadingComments: false,
      loadingTitleMovie: false,
      moviesList: [],
      titleMovie: {},
      moviesComments: [],
    }, {
      type: `FETCH_MOVIES_DATA`,
    })).toEqual({
      loadingMovies: true,
      loadingComments: false,
      loadingTitleMovie: false,
      moviesList: [],
      titleMovie: {},
      moviesComments: [],
    });
  });

  it(`Should reducer fetch movies data success`, () => {
    expect(reducer({
      loadingMovies: true,
      loadingComments: false,
      loadingTitleMovie: false,
      moviesList: [],
      titleMovie: {},
      moviesComments: [],
    }, {
      type: `FETCH_MOVIES_DATA_SUCCESS`,
      payload: moviesList
    })).toEqual({
      loadingMovies: false,
      loadingComments: false,
      loadingTitleMovie: false,
      moviesList,
      titleMovie: {},
      moviesComments: [],
    });
  });

  it(`Should reducer fetch comments data`, () => {
    expect(reducer({
      loadingMovies: false,
      loadingComments: false,
      loadingTitleMovie: false,
      moviesList: [],
      titleMovie: {},
      moviesComments: [],
    }, {
      type: `FETCH_MOVIES_COMMENTS_DATA`,
    })).toEqual({
      loadingMovies: false,
      loadingComments: true,
      loadingTitleMovie: false,
      moviesList: [],
      titleMovie: {},
      moviesComments: [],
    });
  });

  it(`Should reducer fetch comments data success`, () => {
    expect(reducer({
      loadingMovies: false,
      loadingComments: true,
      loadingTitleMovie: false,
      moviesList: [],
      titleMovie: {},
      moviesComments: [],
    }, {
      type: `FETCH_MOVIES_COMMENTS_DATA_SUCCESS`,
      payload: comments
    })).toEqual({
      loadingMovies: false,
      loadingComments: false,
      loadingTitleMovie: false,
      moviesList: [],
      titleMovie: {},
      moviesComments: comments,
    });
  });

  it(`Should reducer fetch title movie`, () => {
    expect(reducer({
      loadingMovies: false,
      loadingComments: false,
      loadingTitleMovie: false,
      moviesList: [],
      titleMovie: {},
      moviesComments: [],
    }, {
      type: `FETCH_TITLE_MOVIE`,
    })).toEqual({
      loadingMovies: false,
      loadingComments: false,
      loadingTitleMovie: true,
      moviesList: [],
      titleMovie: {},
      moviesComments: [],
    });
  });

  it(`Should reducer fetch title movie success`, () => {
    expect(reducer({
      loadingMovies: false,
      loadingComments: false,
      loadingTitleMovie: true,
      moviesList: [],
      titleMovie: {},
      moviesComments: [],
    }, {
      type: `FETCH_TITLE_MOVIE_SUCCESS`,
      payload: titleMovie,
    })).toEqual({
      loadingMovies: false,
      loadingComments: false,
      loadingTitleMovie: false,
      moviesList: [],
      titleMovie,
      moviesComments: [],
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

  it(`Action creator fetch movies comments data returns correct action`, () => {
    expect(ActionCreator.fetchMoviesCommentsData()).toEqual({
      type: ActionTypes.FETCH_MOVIES_COMMENTS_DATA,
    });
  });

  it(`Action creator fetch movies comments data success returns correct action`, () => {

    expect(ActionCreator.fetchMoviesCommentsDataSuccess(comments)).toEqual({
      type: ActionTypes.FETCH_MOVIES_COMMENTS_DATA_SUCCESS,
      payload: comments
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

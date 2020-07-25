import React from 'react';
import renderer from 'react-test-renderer';
import {TitleMovie} from './title-movie.jsx';
import {BrowserRouter} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';

const mockStore = configureStore([]);

const mockData = {
  titleMovie: {
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
    movieVideo: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    isFavorite: false,
  },

  moviesList: [
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
      movieVideo: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      isFavorite: false,
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
      movieVideo: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      isFavorite: false,
    }
  ],
  movieGenres: [
    `Thriller`,
    `Kids & Family`
  ]
};

it(`<TitleMovie /> should match snapshot`, () => {
  const {titleMovie, moviesList, movieGenres} = mockData;
  const store = mockStore({
    MOVIE_DATA: {
      titleMovie,
      moviesList,
      movieGenres,
      loadingMovies: false,
      loadingMoviesError: false,
    },
    MOVIE: {
      activeGenre: `All genres`,
      moviesRenderLimit: 8,
      userFavoriteList: []
    },
    USER: {
      authorizationStatus: `AUTH`,
      userData: {
        id: 1,
        email: `qwe@qwe.ru`,
        name: `qwe`,
        avatarUrl: `/img/avatar.jpg`
      }
    }
  });
  const mockMovie = {
    id: 3,
    image: `img/aviator.jpg`,
    movieBackground: `img/bg-the-grand-budapest-hotel.jpg`,
    movieDate: 2008,
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
    movieVideo: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    isFavorite: false,
  };
  const history = {};
  const addToUserFavoriteList = jest.fn();
  const removeFromUserFavoriteList = jest.fn();
  const tree = renderer
    .create(
        <Provider store={store}>
          <BrowserRouter>
            <TitleMovie
              movie={mockMovie}
              history={history}
              isAuthorized={true}
              addToUserFavoriteList={addToUserFavoriteList}
              removeFromUserFavoriteList={removeFromUserFavoriteList}
              userFavoriteList={[]}
            />
          </BrowserRouter>
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

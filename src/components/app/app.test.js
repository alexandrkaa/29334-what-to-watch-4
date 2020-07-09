import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import App from './app';
import {MOVIES_LIMIT} from '../../consts/consts.js';

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
      movieStarring: `Jude Law, Willem Dafoe, James Franco, Jason Statham, Tom Hardy, Saoirse Ronan, Tony Revoloru, Tilda Swinton, Tom Wilkinso`,
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

describe(`<App /> should render`, () => {
  it(`<App /> should render The Grand Budapest Hotel title film and 2 films from movieList`, () => {
    const {titleMovie, moviesList, movieGenres} = mockData;
    const store = mockStore({
      DATA: {
        titleMovie,
        moviesList,
        movieGenres,
        loadingMovies: false,
      },
      MOVIE: {
        activeGenre: `All genres`,
        moviesRenderLimit: MOVIES_LIMIT,
      }
    });
    const tree = renderer
      .create(
          <Provider store={store}>
            <App />
          </Provider>,
          {
            createNodeMock: () => {
              return {};
            }
          }
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

});

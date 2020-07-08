import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './main.jsx';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {MOVIES_LIMIT} from '../../consts/consts.js';

const mockStore = configureStore([]);

Enzyme.configure({
  adapter: new Adapter(),
});

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

describe(`<Main /> title click test`, () => {
  it(`Should title be clicked at all cards`, () => {
    const onMovieTitleClick = jest.fn();
    const {titleMovie, moviesList, movieGenres} = mockData;
    const store = mockStore({
      DATA: {
        titleMovie,
        moviesList,
        movieGenres,
      },
      MOVIE: {
        activeGenre: `All genres`,
        moviesRenderLimit: MOVIES_LIMIT,
      }
    });
    const main = mount(
        <Provider store={store}>
          <Main
            titleMovie={titleMovie}
            moviesList={moviesList}
            onMovieTitleClick={onMovieTitleClick}
            activeGenre={`Thriller`}
            moviesRenderLimit={MOVIES_LIMIT}
          />
        </Provider>
    );
    const titleLink = main.find(`h3.small-movie-card__title`).at(0);
    expect(titleLink).toHaveLength(1);
    titleLink.simulate(`click`, {preventDefault: jest.fn()});
    expect(onMovieTitleClick).toHaveBeenCalledTimes(1);
  });
});

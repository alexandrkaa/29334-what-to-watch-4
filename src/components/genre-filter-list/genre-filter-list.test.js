import React from 'react';
import renderer from 'react-test-renderer';
import GenreFilterList from './genre-filter-list.jsx';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

it(`<GenreFilterList /> should match snapshot`, () => {
  const moviesList = [
    {
      id: 4,
      image: `img/we-need-to-talk-about-kevin.jpg`,
      movieBackground: `img/bg-the-grand-budapest-hotel.jpg`,
      movieDate: `2000`,
      movieDescription: [`In the 1930s, the Grand Budapest Hotel is a popula…y boy, becomes Gustave&apos;s friend and protege.`, `Gustave prides himself on providing first-classNam…ess painting and the chief suspect in her murder.`],
      movieDirector: `Wes Anderson`,
      movieGenre: `Thriller`,
      movieImage: `img/the-grand-budapest-hotel-poster.jpg`,
      movieRatingCount: `349 ratings`,
      movieRatingLevel: `Bad`,
      movieRatingScore: `3`,
      movieStarring: `Jude Law, Willem Dafoe, James Franco, Jason Statham, Tom Hardy, Saoirse Ronan, Tony Revoloru, Tilda Swinto`,
      title: `Dardjeeling Limited`,
      moviePreview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
    },
    {
      id: 3,
      image: `img/aviator.jpg`,
      movieBackground: `img/bg-the-grand-budapest-hotel.jpg`,
      movieDate: `2008`,
      movieDescription: [`In the 1930s, the Grand Budapest Hotel is a popula…y boy, becomes Gustave&apos;s friend and protege.`, `Gustave prides himself on providing first-classNam…ess painting and the chief suspect in her murder.`],
      movieDirector: `Christopher Nolan`,
      movieGenre: `Kids & Family`,
      movieImage: `img/the-grand-budapest-hotel-poster.jpg`,
      movieRatingCount: `272 ratings`,
      movieRatingLevel: `Normal`,
      movieRatingScore: `2`,
      movieStarring: `Jude Law, Willem Dafoe, James Franco, Jason Statham, Tom Hardy, Saoirse Ronan, Tony Revoloru, Tilda Swinton, Tom Wilkinso`,
      title: `Johnny English`,
      moviePreview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    }
  ];
  const movieGenres = [
    `Thriller`,
    `Kids & Family`
  ];
  const activeGenre = `New genre`;
  const store = mockStore({
    DATA: {
      moviesList,
      movieGenres,
      onChangeActiveGenre: jest.fn()
    },
    MOVIE: {
      activeGenre,
      moviesRenderLimit: 8,
    }
  });
  const tree = renderer
    .create(
        <Provider store={store}>
          <GenreFilterList />
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

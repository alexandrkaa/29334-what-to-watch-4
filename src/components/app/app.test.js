import React from 'react';
import renderer from 'react-test-renderer';
import App from './app';

const mockData = {
  titleMovie: {
    title: `The Grand Budapest Hotel`,
    genre: `Drama`,
    releaseDate: `2014`
  },

  moviesList: [
    `Fantastic Beasts`,
    `Bohemian Rhapsody`,
    `Macbeth`
  ]
};

// Вы можете запустить все тесты или только определённый
// npm run test.jest -- -t '<WelcomeScreen /> should render 5 erros'
describe(`<Main /> should render`, () => {

  it(`<App /> should render The Grand Budapest Hotel title film and 3 films from movieList`, () => {
    const {titleMovie, moviesList} = mockData;
    const tree = renderer
      .create(
          <App titleMovie={titleMovie} moviesList={moviesList} />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

});

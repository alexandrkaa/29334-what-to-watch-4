import React from 'react';
import renderer from 'react-test-renderer';
import MovieCardFullComments from './movie-card-full-comments.jsx';

const comments = [
  {
    id: 1,
    author: {
      id: 17,
      name: `Emely`
    },
    rating: 2.9,
    comment: `Poised to be an instant classic, almost everything about this film is phenomenal - the acting, the cinematography, the discography, etc.`,
    date: `2020-07-15T12:25:15.535Z`
  },
  {
    id: 2,
    author: {
      id: 18,
      name: `Emely2`
    },
    rating: 2.9,
    comment: `comment text`,
    date: `2020-01-15T12:25:15.535Z`
  }
];

it(`<MovieCardFullComments /> should match snapshot`, () => {
  const tree = renderer
    .create(
        <MovieCardFullComments
          comments={comments}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

import React from 'react';
import renderer from 'react-test-renderer';
import MovieCardFullReviewsList from './movie-card-full-reviews-list.jsx';

const comments = [
  {
    movieId: 1,
    id: 1000,
    author: `John Doe`,
    text: `Those an equal point no years do. Depend warmth fat but her but played. Shy and subjects wondered trifling pleasant. Prudent cordial comfort do no on colonel as assured chicken. Smart mrs day which begin. Snug do sold mr it if such. Terminated uncommonly at at estimating. Man behaviour met moonlight extremity acuteness direction.`,
    date: `01.01.2000`,
    rating: 3,
  },
  {
    movieId: 1,
    id: 1001,
    author: `Doe John`,
    text: `Talking chamber as shewing an it minutes. Trees fully of blind do. Exquisite favourite at do extensive listening. Improve up musical welcome he. Gay attended vicinity prepared now diverted. Esteems it ye sending reached as. Longer lively her design settle tastes advice mrs off who. `,
    date: `31.12.2020`,
    rating: 9,
  }
];

it(`<MovieCardFullReviewsList /> should match snapshot`, () => {
  const tree = renderer
    .create(
        <MovieCardFullReviewsList
          comments={comments}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

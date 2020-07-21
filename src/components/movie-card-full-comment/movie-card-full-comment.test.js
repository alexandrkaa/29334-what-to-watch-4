import React from 'react';
import renderer from 'react-test-renderer';
import MovieCardFullComment from './movie-card-full-comment.jsx';

const comment = {
  movieId: 1,
  id: 1000,
  author: `John Doe`,
  text: `Those an equal point no years do. Depend warmth fat but her but played. Shy and subjects wondered trifling pleasant. Prudent cordial comfort do no on colonel as assured chicken. Smart mrs day which begin. Snug do sold mr it if such. Terminated uncommonly at at estimating. Man behaviour met moonlight extremity acuteness direction.`,
  date: `01.01.2000`,
  rating: 3,
};

it(`<MovieCardFullComment /> should match snapshot`, () => {
  const tree = renderer
    .create(
        <MovieCardFullComment
          comment={comment}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

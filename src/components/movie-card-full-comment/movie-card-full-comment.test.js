import React from 'react';
import renderer from 'react-test-renderer';
import MovieCardFullComment from './movie-card-full-comment.jsx';

const comments = {
  3: [
    {
      id: 1,
      author: {
        id: 4,
        name: `Kate Muir`
      },
      rating: 8.9,
      text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
      date: `2019-05-08T14:13:56.569Z`
    }
  ],
};

it(`<MovieCardFullComment /> should match snapshot`, () => {
  const tree = renderer
    .create(
        <MovieCardFullComment
          comment={comments[3][0]}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

import React from 'react';
import renderer from 'react-test-renderer';
import MovieCardFullReviewsList from './movie-card-full-comments-list.jsx';

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
    }, {
      id: 2,
      author: {
        id: 4,
        name: `Kate Muir`
      },
      rating: 8.9,
      text: `Comment text`,
      date: `2019-05-12T14:13:56.569Z`
    }
  ],
};

it(`<MovieCardFullReviewsList /> should match snapshot`, () => {
  const tree = renderer
    .create(
        <MovieCardFullReviewsList
          comments={comments[3]}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

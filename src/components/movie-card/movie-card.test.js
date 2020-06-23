import React from 'react';
import renderer from 'react-test-renderer';
import MovieCard from "./movie-card.jsx";

const movie = {
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
  title: `Dardjeeling Limited`
};

it(`<MovieCard /> should render Big Bang Theory movie`, () => {
  const onMovieCardMouseEnter = jest.fn();
  const onMovieTitleClick = jest.fn();
  const tree = renderer
    .create(
        <MovieCard
          key={movie.id}
          movie={movie}
          onMovieCardMouseEnter={onMovieCardMouseEnter}
          onMovieTitleClick={onMovieTitleClick}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

import React from 'react';
import renderer from 'react-test-renderer';
import MovieCardFullDetails from './movie-card-full-details.jsx';

const movie = {
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
  movieRunTime: 9900,
  backgroundColor: `#000000`,
  movieVideo: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  isFavorite: false,
};

it(`<MovieCardFullDetails /> should match snapshot`, () => {
  const tree = renderer
    .create(
        <MovieCardFullDetails
          movie={movie}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

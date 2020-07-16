import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {MovieCard} from './movie-card.jsx';

Enzyme.configure({
  adapter: new Adapter(),
});

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
  backgroundColor: `#000000`,
  movieVideo: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  isFavorite: false,
};

it(`Should title be pressed`, () => {
  const onPlay = jest.fn();
  const onPause = jest.fn();
  const onMovieTitleClick = jest.fn();
  const children = <></>;
  const main = shallow(
      <MovieCard
        key={movie.id}
        movie={movie}
        onPlay={onPlay}
        onPause={onPause}
        onMovieTitleClick={onMovieTitleClick}
      >
        {children}
      </MovieCard>
  );

  const movieCard = main.find(`.small-movie-card`).first();
  expect(movieCard).toHaveLength(1);
  movieCard.simulate(`mouseenter`);
  expect(onPlay).toHaveBeenCalledTimes(1);
  main.update();
  movieCard.simulate(`mouseleave`);
  expect(onPause).toHaveBeenCalledTimes(1);
  main.update();

  const movieCardTitle = main.find(`.small-movie-card__link`);
  expect(movieCardTitle).toHaveLength(1);

  const movieCardImage = main.find(`.small-movie-card__image`);
  expect(movieCardImage).toHaveLength(1);
});

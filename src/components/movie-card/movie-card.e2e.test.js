import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MovieCard from "./movie-card.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

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
  title: `Dardjeeling Limited`,
  moviePreview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
};

it(`Should title be pressed at all cards`, () => {
  const onMovieCardMouseEnter = jest.fn();
  const onMovieTitleClick = jest.fn();
  const clickMockedEvent = {
    target: {}
  };
  const main = shallow(
      <MovieCard
        key={movie.id}
        movie={movie}
        onMovieCardMouseEnter={onMovieCardMouseEnter}
        onMovieTitleClick={onMovieTitleClick}
      />
  );

  const movieCard = main.find(`.small-movie-card`).first();
  expect(movieCard).toHaveLength(1);

  const movieCardTitle = main.find(`.small-movie-card__title`);
  expect(movieCardTitle).toHaveLength(1);
  movieCardTitle.simulate(`click`, movie);
  expect(onMovieTitleClick).toHaveBeenCalledTimes(1);
  expect(onMovieTitleClick.mock.calls[0][0]).toMatchObject(movie);

  const movieCardImage = main.find(`.small-movie-card__image`);
  expect(movieCardImage).toHaveLength(1);
  movieCardImage.simulate(`click`, movie, clickMockedEvent);
  expect(onMovieTitleClick).toHaveBeenCalledTimes(2);
  expect(onMovieTitleClick.mock.calls[1][0]).toMatchObject(movie);
});

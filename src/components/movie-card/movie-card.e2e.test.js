import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MovieCard from "./movie-card.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

const movie = {
  id: 1,
  title: `Теория большого взрыва: Откровение ринита`,
  image: `https://avatars.mds.yandex.net/get-ott/223007/2a000001693961696d02f2e3d4cb33a98658/672x438`,
};

it(`Should title be pressed at all cards`, () => {
  const onMovieCardMouseEnter = jest.fn();
  const onMovieTitleClick = jest.fn();
  const main = shallow(
      <MovieCard
        key={movie.id}
        title={movie.title}
        image={movie.image}
        onMovieCardMouseEnter={onMovieCardMouseEnter}
        onMovieTitleClick={onMovieTitleClick}
      />
  );

  const movieCard = main.find(`.small-movie-card`).first();
  expect(movieCard).toHaveLength(1);
  movieCard.props().onMouseEnter();
  expect(onMovieCardMouseEnter.mock.calls.length).toBe(1);
  const movieCardTitle = main.find(`.small-movie-card__title`);
  expect(movieCardTitle).toHaveLength(1);
  movieCardTitle.simulate(`click`);
  expect(onMovieTitleClick).toHaveBeenCalledTimes(1);
});

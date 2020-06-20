import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main";

Enzyme.configure({
  adapter: new Adapter(),
});

const mockData = {
  titleMovie: {
    title: `The Grand Budapest Hotel`,
    genre: `Drama`,
    releaseDate: `2014`
  },

  moviesList: [
    {
      id: 1,
      title: `Теория большого взрыва: Откровение ринита`,
      image: `https://avatars.mds.yandex.net/get-ott/223007/2a000001693961696d02f2e3d4cb33a98658/672x438`,
    },
    {
      id: 2,
      title: `Звездный путь`,
      image: `https://avatars.mds.yandex.net/get-ott/224348/2a000001612712a3848cc18d4a955a72054a/672x438`,
    },
    {
      id: 3,
      title: `Рик и Морти: Риконечная Мортистория`,
      image: `https://avatars.mds.yandex.net/get-ott/1531675/2a00000171ded04a30a4b8fdeb0097d8a54f/672x438`,
    },
  ],
};

describe(`<Main /> title click test`, () => {
  const {titleMovie, moviesList} = mockData;
  it(`Should title be clicked at all cards`, () => {
    const _handleMovieCardMouseEnter = jest.fn();
    const _handleMovieTitleClick = jest.fn();
    const main = mount(
        <Main
          titleMovie={titleMovie}
          moviesList={moviesList}
          onMovieCardMouseEnter={_handleMovieCardMouseEnter}
          onMovieTitleClick={_handleMovieTitleClick}
        />
    );
    const titleLinks = main.find(`h3.small-movie-card__title`);
    titleLinks.forEach((titleLink) => {
      expect(titleLink).toHaveLength(1);
      titleLink.simulate(`click`);
    });
    expect(_handleMovieTitleClick).toHaveBeenCalledTimes(moviesList.length);
  });
});

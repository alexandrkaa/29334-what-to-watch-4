import React from 'react';
import renderer from 'react-test-renderer';
import App from './app';

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

describe(`<App /> should render`, () => {

  it(`<App /> should render The Grand Budapest Hotel title film and 3 films from movieList`, () => {
    const {titleMovie, moviesList} = mockData;
    const tree = renderer
      .create(
          <App titleMovie={titleMovie} moviesList={moviesList} />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

});

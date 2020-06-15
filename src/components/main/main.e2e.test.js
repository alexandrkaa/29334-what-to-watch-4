import React from "react";
import Enzyme, {shallow} from "enzyme";
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
    `Fantastic Beasts: The Crimes of Grindelwald`,
    `Bohemian Rhapsody`,
    `Macbeth`,
    `Aviator`,
    `We need to talk about Kevin`
  ]
};

describe(`<Main /> title click test`, () => {
  const {titleMovie, moviesList} = mockData;
  it(`Should title be pressed at all cards`, () => {
    const onTitleClick = jest.fn();
    const mainSreen = shallow(
        <Main
          titleMovie={titleMovie}
          moviesList={moviesList}
          onTitleClick={onTitleClick}
        />
    );
    const titleLinks = mainSreen.find(`a.small-movie-card__link`);
    // welcomeButton.props().onClick();
    titleLinks.forEach((titleLink) => {
      titleLink.simulate(`click`);
    });
    // expect(onWelcomeButtonPressed.mock.calls.length).toBe(1);
    expect(onTitleClick).toHaveBeenCalledTimes(moviesList.length);
  });
});

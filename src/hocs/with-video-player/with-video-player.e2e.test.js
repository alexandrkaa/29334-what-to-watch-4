import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import PropTypes from 'prop-types';
import withVideoPlayer from './with-video-player.js';

Enzyme.configure({
  adapter: new Adapter(),
});

const MockComponent = (props) => {
  const {children} = props;

  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  );
};

MockComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};


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
  moviePreview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  backgroundColor: `#000000`,
};

const MockComponentWrapped = withVideoPlayer(MockComponent);

it(`Should withVideoPlayer state will be changed`, () => {
  const isMuted = true;

  const main = mount(
      <MockComponentWrapped
        key={movie.id}
        movie={movie}
        isMuted={isMuted}
        videoWidth={280}
        videoHeight={175}
      />
  );

  const pause = jest.spyOn(window.HTMLMediaElement.prototype, `pause`).mockImplementation(() => {});
  const play = jest.spyOn(window.HTMLMediaElement.prototype, `play`).mockImplementation(() => {});

  main.setState({
    isPlaying: true,
    isInitialPlay: false,
  });
  main.instance()._handleVideoPause();
  expect(main.state(`isPlaying`)).toBe(false);
  main.instance()._handleVideoPlay();
  expect(main.state(`isPlaying`)).toBe(true);

  pause.mockRestore();
  play.mockRestore();
});

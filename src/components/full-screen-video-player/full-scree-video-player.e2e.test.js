import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {FullScreenVideoPlayer} from './full-screen-video-player.jsx';

Enzyme.configure({
  adapter: new Adapter(),
});

it(`<FullScreenVideoPlayer /> actions should works correctly`, () => {
  const movie = {
    id: 3,
    image: `img/aviator.jpg`,
    movieBackground: `img/bg-the-grand-budapest-hotel.jpg`,
    movieDate: `2008`,
    movieDescription: `In the 1930s, the Grand Budapest Hotel is a popula…y boy, becomes Gustave&apos;s friend and protege.`,
    movieDirector: `Christopher Nolan`,
    movieGenre: `Kids & Family`,
    movieImage: `img/the-grand-budapest-hotel-poster.jpg`,
    movieRatingCount: `272 ratings`,
    movieRatingLevel: `Normal`,
    movieRatingScore: `2`,
    movieStarring: [`Jude Law`, `Willem Dafoe`],
    title: `Johnny English`,
    moviePreview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    backgroundColor: `#000000`,
    movieVideo: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    isFavorite: false,
  };
  const history = {};
  const onPlay = jest.fn();
  const onPause = jest.fn();
  const onFullscreenToggle = jest.fn();
  const duration = 100;
  const currentTime = 0;
  const isEnded = false;

  const main = shallow(
      <FullScreenVideoPlayer
        movie={movie}
        isMuted={true}
        videoWidth="100%"
        videoHeight="100%"
        videoSrc={movie.movieVideo}
        history={history}
        onPlay={onPlay}
        onPause={onPause}
        onFullscreenToggle={onFullscreenToggle}
        isPlaying={false}
        duration={duration}
        currentTime={currentTime}
        isEnded={isEnded}
      >
        <video></video>
      </FullScreenVideoPlayer>,
      {
        createNodeMock: () => {
          return {movie};
        }
      }
  );
  const exitButton = main.find(`.player__exit`);
  expect(exitButton).toHaveLength(1);
  const playBtn = main.find(`.player__play`);
  expect(playBtn).toHaveLength(1);
  playBtn.simulate(`click`, {
    preventDefault: () => {
    }
  });
  expect(onPlay).toHaveBeenCalledTimes(1);
});

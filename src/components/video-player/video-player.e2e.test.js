import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import VideoPlayer from './video-player.jsx';

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

const isMuted = true;

describe(`Should initial state be changed`, () => {
  const {moviePreview, image} = movie;
  it(`Should initial state isPlaying of <VideoPlayer /> be true`, () => {
    const isPlaying = true;
    const main = mount(
        <VideoPlayer
          isMuted={isMuted}
          isPlaying={isPlaying}
          src={moviePreview}
          poster={image}
        />,
        {
          createNodeMock: () => {
            return {};
          }
        }
    );

    expect(main.state(`isPlaying`)).toBe(true);
  });

  it(`Should initial state isPlaying of <VideoPlayer /> be false`, () => {
    const isPlaying = false;
    const main = mount(
        <VideoPlayer
          isMuted={isMuted}
          isPlaying={isPlaying}
          src={moviePreview}
          poster={image}
        />,
        {
          createNodeMock: () => {
            return {};
          }
        }
    );

    expect(main.state(`isPlaying`)).toBe(false);
  });
});

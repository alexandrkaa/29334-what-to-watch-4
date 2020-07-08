import React from 'react';
import renderer from 'react-test-renderer';
import VideoPlayer from './video-player.jsx';

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

it(`<VideoPlayer /> should render correctly`, () => {
  const isPlaying = true;
  const isMuted = true;
  const {moviePreview, image} = movie;
  const controls = false;
  const autoplay = false;
  const tree = renderer
    .create(
        <VideoPlayer
          isMuted={isMuted}
          isPlaying={isPlaying}
          src={moviePreview}
          poster={image}
          controls={controls}
          autoplay={autoplay}
        />,
        {
          createNodeMock: () => {
            return {};
          }
        }
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

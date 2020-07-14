import React from 'react';
import renderer from 'react-test-renderer';
import FullScreenVideoPlayer from './full-screen-video-player.jsx';

it(`<FullScreenVideoPlayer /> should match snapshot`, () => {
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

  const tree = renderer
    .create(
        <FullScreenVideoPlayer
          movie={movie}
          isMuted={true}
          videoWidth="100%"
          videoHeight="100%"
          videoSrc={movie.movieVideo}
          history={history}
        />,
        {
          createNodeMock: () => {
            return {movie};
          }
        }
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

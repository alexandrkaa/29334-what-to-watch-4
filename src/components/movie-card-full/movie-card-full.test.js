import React from 'react';
import {MovieCardFull} from './movie-card-full.jsx';

import ShallowRenderer from 'react-test-renderer/shallow';
const renderer = new ShallowRenderer();

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
  movieRunTime: 9900,
  backgroundColor: `#000000`,
  movieVideo: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  isFavorite: false,
};

const similarMovies = [
  {
    id: 5,
    image: `img/we-need-to-talk-about-kevin.jpg`,
    movieBackground: `img/bg-the-grand-budapest-hotel.jpg`,
    movieDate: `2300`,
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
    movieRunTime: 9900,
    backgroundColor: `#000000`,
    movieVideo: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    isFavorite: false,
  },
  {
    id: 6,
    image: `img/we-need-to-talk-about-kevin.jpg`,
    movieBackground: `img/bg-the-grand-budapest-hotel.jpg`,
    movieDate: `2200`,
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
    movieRunTime: 9900,
    backgroundColor: `#000000`,
    movieVideo: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    isFavorite: false,
  },
  {
    id: 7,
    image: `img/we-need-to-talk-about-kevin.jpg`,
    movieBackground: `img/bg-the-grand-budapest-hotel.jpg`,
    movieDate: `2100`,
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
    movieRunTime: 9900,
    backgroundColor: `#000000`,
    movieVideo: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    isFavorite: false,
  }
];

const mockTabs = [
  {
    id: `OVERVIEW`,
    name: `Tab1`,
    isActive: true,
  },
  {
    id: `DETAILS`,
    name: `Tab2`,
    isActive: false,
  },
  {
    id: `REVIEWS`,
    name: `Tab3`,
    isActive: false,
  },
];

const onMovieTitleClick = jest.fn();
const onActiveItemChange = () => {};
const fetchComments = () => {};
const addToUserFavoriteList = () => {};
const removeFromUserFavoriteList = () => {};
const comments = [
  {
    id: 1,
    author: {
      id: 17,
      name: `Emely`
    },
    rating: 2.9,
    text: `Poised to be an instant classic, almost everything about this film is phenomenal - the acting, the cinematography, the discography, etc.`,
    date: `2020-07-15T12:25:15.535Z`
  }
];

describe(`<MovieCardFull /> should movie full card page to match snapshot`, () => {
  it(`<MovieCardFull /> should movie full card page to match snapshot with tab 1`, () => {
    renderer
      .render(
          <MovieCardFull
            movie={movie}
            similarMovies={similarMovies}
            activeItem={`OVERVIEW`}
            onMovieTitleClick={onMovieTitleClick}
            tabs={mockTabs}
            history={{}}
            isAuthorized={true}
            onActiveItemChange={onActiveItemChange}
            fetchComments={fetchComments}
            isLoadingComments={false}
            isLoadingCommentsError={false}
            addToUserFavoriteList={addToUserFavoriteList}
            removeFromUserFavoriteList={removeFromUserFavoriteList}
            comments={comments}
          />,

          {
            createNodeMock: () => {
              return {};
            }
          }
      );
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });

  it(`<MovieCardFull /> should movie full card page to match snapshot with tab 2`, () => {
    renderer
      .render(
          <MovieCardFull
            movie={movie}
            similarMovies={similarMovies}
            activeItem={`DETAILS`}
            onMovieTitleClick={onMovieTitleClick}
            tabs={mockTabs}
            history={{}}
            isAuthorized={true}
            onActiveItemChange={onActiveItemChange}
            fetchComments={fetchComments}
            isLoadingComments={false}
            isLoadingCommentsError={false}
            addToUserFavoriteList={addToUserFavoriteList}
            removeFromUserFavoriteList={removeFromUserFavoriteList}
            comments={comments}
          />,
          {
            createNodeMock: () => {
              return {};
            }
          }
      );
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });

  it(`<MovieCardFull /> should movie full card page to match snapshot with tab 3`, () => {
    renderer
      .render(
          <MovieCardFull
            movie={movie}
            similarMovies={similarMovies}
            activeItem={`REVIEWS`}
            onMovieTitleClick={onMovieTitleClick}
            tabs={mockTabs}
            history={{}}
            isAuthorized={true}
            onActiveItemChange={onActiveItemChange}
            fetchComments={fetchComments}
            isLoadingComments={false}
            isLoadingCommentsError={false}
            addToUserFavoriteList={addToUserFavoriteList}
            removeFromUserFavoriteList={removeFromUserFavoriteList}
            comments={comments}
          />,
          {
            createNodeMock: () => {
              return {};
            }
          }
      );
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});

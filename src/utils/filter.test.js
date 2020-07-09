import {isSameText, getGenresFromMovies, getWithLimit, getMoviesByGenre, getFilteredMovies} from './filters.js';
import {DEFAULT_GENRE} from '../consts/consts.js';

const mockData = {
  moviesList: [
    {
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
    },
    {
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
    },
    {
      id: 7,
      image: `img/aviator.jpg`,
      movieBackground: `img/bg-the-grand-budapest-hotel.jpg`,
      movieDate: `2008`,
      movieDescription: `In the 1930s, the Grand Budapest Hotel is a popula…y boy, becomes Gustave&apos;s friend and protege.`,
      movieDirector: `Christopher Nolan`,
      movieGenre: `Kids & Family`,
      movieImage: `img/the-grand-budapest-hotel-poster.jpg`,
      movieRatingCount: `272 ratings`,
      movieRatingLevel: `Very bad`,
      movieRatingScore: `2`,
      movieStarring: [`Jude Law`, `Willem Dafoe`],
      title: `Johnny English`,
      moviePreview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      backgroundColor: `#000000`,
      movieVideo: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      isFavorite: false,
    }
  ],
  movieGenres: [
    `Thriller`,
    `Kids & Family`
  ]
};

describe(`Filter utils works correctly`, () => {
  it(`isSameText func works correctly`, () => {
    expect(isSameText(`One Two`, `one two`)).toBe(true);
  });

  it(`getGenresFromMovies func works correctly`, () => {
    expect(getGenresFromMovies(mockData.moviesList)).toEqual(mockData.movieGenres);
  });

  it(`getWithLimit func works correctly`, () => {
    expect(getWithLimit(mockData.moviesList, 0, 1)).toEqual([mockData.moviesList[0]]);
  });

  it(`getMoviesByGenre func works correctly`, () => {
    expect(getMoviesByGenre(mockData.moviesList, `Thriller`)).toEqual([mockData.moviesList[0]]);
  });

  it(`getMoviesByGenre func with default genre works correctly`, () => {
    expect(getMoviesByGenre(mockData.moviesList, DEFAULT_GENRE)).toEqual(mockData.moviesList);
  });

  it(`getFilteredMovies func works correctly`, () => {
    expect(getFilteredMovies(mockData.moviesList, `Thriller`)).toEqual([mockData.moviesList[0]]);
  });
});

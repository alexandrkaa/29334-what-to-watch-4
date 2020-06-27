import {generateRandomInteger, getRandomPartOfArray} from '../utils/common.js';

const MOVIES_NUM = 15;

const YearLimits = {
  min: 1980,
  max: 2020
};

const RatingScoreLimits = {
  min: 1,
  max: 10
};

const RatingCountLimits = {
  min: 1,
  max: 999
};

const GENRES = [
  `Comedie`,
  `Crime`,
  `Documentary`,
  `Drama`,
  `Horror`,
  `Kids & Family`,
  `Romance`,
  `Sci-Fi`,
  `Thriller`,
];

const DIRECTORS = [
  `Wes Anderson`,
  `Christopher Nolan`,
  `Stiven Spilberg`
];

const ACTORS = [
  `Leonardo Di Caprio`,
  `Bill Murray`,
  `Edward Norton`,
  `Jude Law`,
  `Willem Dafoe`,
  `James Franco`,
  `Jason Statham`,
  `Tom Hardy`,
  `Saoirse Ronan`,
  `Tony Revoloru`,
  `Tilda Swinton`,
  `Tom Wilkinson`,
  `Owen Wilkinson`,
  `Adrien Brody`,
  `Ralph Fiennes`,
  `Jeff Goldblu`
];

const RATING_LEVELS = [
  `Bad`,
  `Normal`,
  `Good`,
  `Very good`,
  `Awesome`
];

const TITLES = [
  `Macbeth`,
  `Aviator`,
  `We need to talk about Kevin`,
  `What We Do in the Shadows`,
  `Revenant`,
  `Johnny English`,
  `Shutter Island`,
  `Pulp Fiction`,
  `No Country for Old Men`,
  `Snatch`,
  `Moonrise Kingdom`,
  `Seven Years in Tibet`,
  `Midnight Special`,
  `War of the Worlds`,
  `Dardjeeling Limited`,
  `Orlando`,
  `Mindhunter`,
  `Midnight Special`,
  `Bohemian Rhapsody`,
];

const IMAGES = [
  `img/macbeth.jpg`,
  `img/aviator.jpg`,
  `img/we-need-to-talk-about-kevin.jpg`,
  `img/what-we-do-in-the-shadows.jpg`,
  `img/revenant.jpg`,
  `img/johnny-english.jpg`,
  `img/shutter-island.jpg`,
  `img/pulp-fiction.jpg`,
  `img/no-country-for-old-men.jpg`,
  `img/snatch.jpg`,
  `img/moonrise-kingdom.jpg`,
  `img/seven-years-in-tibet.jpg`,
  `img/midnight-special.jpg`,
  `img/war-of-the-worlds.jpg`,
  `img/dardjeeling-limited.jpg`,
  `img/orlando.jpg`,
  `img/mindhunter.jpg`,
  `img/midnight-special.jpg`,
  `img/bohemian-rhapsody.jpg`,
];

const MOVIE_PREVIEWS = [
  `https://cdn.videvo.net/videvo_files/converted/2013_08/preview/hd0903.mov36970.webm`,
  `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  `https://cdn.videvo.net/videvo_files/converted/2013_08/preview/hd0983.mov28884.webm`
];

const generateRandomMovie = (id) => {
  const randomActors = getRandomPartOfArray(ACTORS).join(`, `);
  return {
    id,
    title: TITLES[generateRandomInteger(0, TITLES.length - 1)],
    image: IMAGES[generateRandomInteger(0, IMAGES.length - 1)],
    movieDate: `${generateRandomInteger(YearLimits.min, YearLimits.max)}`,
    movieGenre: GENRES[generateRandomInteger(0, GENRES.length - 1)],
    movieBackground: `img/bg-the-grand-budapest-hotel.jpg`,
    movieImage: `img/the-grand-budapest-hotel-poster.jpg`,
    movieRatingScore: `${generateRandomInteger(RatingScoreLimits.min, RatingScoreLimits.max)}`,
    movieRatingLevel: RATING_LEVELS[generateRandomInteger(0, RATING_LEVELS.length - 1)],
    movieRatingCount: `${generateRandomInteger(RatingCountLimits.min, RatingCountLimits.max)} ratings`,
    movieDirector: DIRECTORS[generateRandomInteger(0, DIRECTORS.length - 1)],
    movieStarring: randomActors.substring(0, randomActors.length - 1),
    movieDescription: [
      `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&apos;s friend and protege.`,
      `Gustave prides himself on providing first-className service to the hotel&apos;s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave&apos;s lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`
    ],
    moviePreview: MOVIE_PREVIEWS[generateRandomInteger(0, MOVIE_PREVIEWS.length - 1)],
  };
};

const randomMovies = Array(MOVIES_NUM).fill(``).map((it, key) => {
  return generateRandomMovie((key + 1));
});

export default randomMovies;

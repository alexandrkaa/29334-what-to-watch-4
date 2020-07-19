import {combineReducers} from 'redux';
import {reducer as moviesData} from './data/movies-data/movies-data.js';
import {reducer as commentsData} from './data/comments-data/comments-data.js';
import {reducer as movie} from './movie/movie.js';
import {reducer as user} from './user/user.js';
import NameSpace from './name-space.js';

export default combineReducers({
  [NameSpace.MOVIE_DATA]: moviesData,
  [NameSpace.MOVIE]: movie,
  [NameSpace.USER]: user,
  [NameSpace.COMMENTS_DATA]: commentsData,
});

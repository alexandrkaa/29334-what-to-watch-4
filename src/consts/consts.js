export const MovieCardFullTabsIds = {
  OVERVIEW: `OVERVIEW`,
  DETAILS: `DETAILS`,
  REVIEWS: `REVIEWS`,
};
export const PreviewVideoSize = {
  width: 280,
  height: 175
};

export const MovieCardFullTabs = [
  {
    id: `OVERVIEW`,
    name: `Overview`,
  },
  {
    id: `DETAILS`,
    name: `Details`
  },
  {
    id: `REVIEWS`,
    name: `Reviews`
  },
];

export const SECS_PER_HOUR = 3600;
export const MOVIES_LIKE_THIS_NUM = 4;
export const DEFAULT_GENRE = `All genres`;
export const MOVIES_LIMIT = 8;
export const GENRES_LIMIT = 8;
export const START_PREVIEW_DELAY = 1000;
export const BASE_URL = `https://htmlacademy-react-3.appspot.com`;
export const BASE_API_URL = `${BASE_URL}/wtw`;
export const API_REQUEST_TIMEOUT = 5000;

export const FiledsIds = {
  EMAIL_FIELD_ID: `user-email`,
  PASSWORD_FIELD_ID: `user-password`,
  RATING_FIELD_ID: `rating`,
  COMMENTS_FIELD_ID: `comments`,
};

export const SignInFields = [
  {
    id: FiledsIds.EMAIL_FIELD_ID,
    label: `Email address`,
    type: `email`,
    placeholder: `Email address`,
  },
  {
    id: FiledsIds.PASSWORD_FIELD_ID,
    label: `Password`,
    type: `password`,
    placeholder: `Password`,
  },
];

export const NetworkErrors = {
  UNAUTHORIZED: 401,
  BAD_REQUEST: 400,
};

export const AppRoutes = {
  MAIN_PAGE: `/`,
  FULL_PLAYER_PAGE: `/player`,
  FILM_PAGE: `/films`,
  LOGIN_PAGE: `/login`,
  REVIEW_PAGE: `/review`,
};

export const REVIEW_STARS_NUMBER = 5;

export const ReviewTextLength = {
  MIN: 1,
  MAX: 400,
};

export const ComponentsKeys = {
  BREADCRUMBS: `Breadcrumbs`,
  USERPROFILE: `UserProfile`,
};

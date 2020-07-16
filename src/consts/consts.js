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

export const EMAIL_FIELD_ID = `user-email`;
export const PASSWORD_FIELD_ID = `user-password`;
export const SignInFields = [
  {
    id: EMAIL_FIELD_ID,
    label: `Email address`,
    type: `email`,
    placeholder: `Email address`,
  },
  {
    id: PASSWORD_FIELD_ID,
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
  FULL_PLAYER_PAGE: `/player/:id`,
  FILM_PAGE: `/films/:id`,
  LOGIN_PAGE: `/login`,
};

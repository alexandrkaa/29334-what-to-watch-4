import {BASE_URL} from '../../consts/consts.js';
const userAdapter = (userData) => {
  return {
    id: userData.id,
    email: userData.email,
    name: userData.name,
    avatarUrl: `${BASE_URL}${userData.avatar_url}`,
  };
};

export default userAdapter;

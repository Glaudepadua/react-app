import api from "_common/services/api";

const BASE_PATH = "/user";

const getAll = () => {
  return api.get(BASE_PATH);
};

const create = (user) => {
  return api.post(BASE_PATH, user);
};

const update = (user) => {
  return api.put(`${BASE_PATH}/${user._id}`, user);
}

const UserService = { getAll, post: create, put: update };

export default UserService;

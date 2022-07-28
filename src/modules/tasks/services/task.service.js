import UserService from "modules/users/services/user.service";
import { LOGGED_USER_ID } from "_common/constants/common.constants";
import api from "_common/services/api";
import { TASK_STATUS_ROUTE } from "../constants/tasks.constants";

const BASE_PATH = "/task";

const getByStatus = (status) => {
  const statusCode = TASK_STATUS_ROUTE[status] || TASK_STATUS_ROUTE.all;
  return api.get(`${BASE_PATH}/${statusCode}/${LOGGED_USER_ID}`);
};

const getResponsible = () => {
  return UserService.getAll();
};

const TaskService = {
  getByStatus,
  getResponsible
};

export default TaskService;

import UserService from "modules/users/services/user.service";
import { useEffect } from "react";
import UsersListTableView from "./UsersListTableView";

const UsersListTable = () => {
  useEffect(() => {
    const fetchUsers = async () => {
      const resp = await UserService.getAll();
      console.log({ resp });
    };

    fetchUsers();
  }, []);

  return <UsersListTableView />;
};

export default UsersListTable;

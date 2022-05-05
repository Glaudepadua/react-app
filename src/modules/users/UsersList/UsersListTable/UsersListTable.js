import UserService from "modules/users/services/user.service";
import { useContext, useEffect, useState } from "react";
import { UsersListContext } from "../context/UsersListContext";
import UsersListTableView from "./UsersListTableView";

const UsersListTable = () => {
  const { setUsers } = useContext(UsersListContext);

  const [filteredUsers, setFilteredUsers] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      const {
        data: { body }
      } = await UserService.getAll();
      setUsers(body);
      setFilteredUsers(body);
    };

    fetchUsers();
  }, [setUsers]);

  return <UsersListTableView users={filteredUsers} />;
};

export default UsersListTable;

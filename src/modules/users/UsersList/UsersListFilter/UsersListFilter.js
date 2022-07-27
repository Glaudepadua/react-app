import { useContext, useEffect, useState } from "react";
import useDebounce from "_common/hooks/useDebounce";
import { UsersListContext } from "../context/UsersListContext";
import UsersListFilterView from "./UsersListFilterView";

const UsersListFilter = () => {
  const { setFilter } = useContext(UsersListContext);

  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm);

  const handlerChangeSearchTerm = (event) => setSearchTerm(event.target.value);

  useEffect(() => {
    setFilter(debouncedSearchTerm);
  }, [debouncedSearchTerm, setFilter]);

  return <UsersListFilterView {...{ handlerChangeSearchTerm }} />;
};

export default UsersListFilter;

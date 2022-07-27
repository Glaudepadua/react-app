import { useContext, useEffect, useState } from "react";
import useDebounce from "_common/hooks/useDebounce";
import { TasksListContext } from "../context/TaskListContext";
import TasksListFilterView from "./TasksListFilterView";

const TasksListFilter = () => {
  const { setFilter } = useContext(TasksListContext);

  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm);

  const handlerChangeSearchTerm = (event) => setSearchTerm(event.target.value);

  useEffect(() => {
    setFilter(debouncedSearchTerm);
  }, [debouncedSearchTerm, setFilter]);

  return <TasksListFilterView {...{ handlerChangeSearchTerm }} />;
};

export default TasksListFilter;

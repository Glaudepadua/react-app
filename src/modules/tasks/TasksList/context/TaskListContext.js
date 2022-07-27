import { createContext, memo, useState } from "react";

export const TasksListContext = createContext(null);
TasksListContext.displayName = "TasksListContext";

export const TasksListContextProvider = memo(({ children }) => {
  const [tasks, setTasks] = useState(null);
  const [filter, setFilter] = useState(null);

  return <TasksListContext.Provider value={{ tasks, setTasks, filter, setFilter }}>{children}</TasksListContext.Provider>;
});

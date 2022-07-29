import { createContext, memo, useState } from "react";

export const TasksListContext = createContext(null);
TasksListContext.displayName = "TasksListContext";

export const TasksListContextProvider = memo(({ children }) => {
  const [tasks, setTasks] = useState(null);
  const [filter, setFilter] = useState(null);
  const [taskDialog, setTaskDialog] = useState({ open: false });

  return (
    <TasksListContext.Provider value={{ tasks, setTasks, filter, setFilter, taskDialog, setTaskDialog }}>
      {children}
    </TasksListContext.Provider>
  );
});

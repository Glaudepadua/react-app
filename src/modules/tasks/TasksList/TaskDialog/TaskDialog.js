import { useFormik } from "formik";
import TaskService from "modules/tasks/services/task.service";
import { useContext, useEffect, useState } from "react";
import { LOGGED_USER_ID, TASK_STATUS } from "_common/constants/common.constants";
import useSnackbar from "_common/hooks/useSnackbar";
import Yup from "_common/utils/YupValidator";
import { TasksListContext } from "../context/TaskListContext";
import TaskDialogView from "./TaskDialogView";

const TaskDialog = () => {
  const { setTasks, setTaskDialog } = useContext(TasksListContext);
  const { snackbarSuccess } = useSnackbar();
  const [responsibles, setResponsibles] = useState([]);

  useEffect(() => {
    const fetchResponsibles = async () => {
      const {
        data: { body }
      } = await TaskService.getResponsible();

      setResponsibles(body);
    };

    fetchResponsibles();
  }, []);

  const validationSchema = Yup.object().shape({
    status: Yup.string().oneOf([TASK_STATUS.OPEN, TASK_STATUS.FINISHED]).required(),
    description: Yup.string().max(100).required(),
    responsible: Yup.string().required()
  });

  const initialValues = {
    status: TASK_STATUS.OPEN,
    description: "",
    responsible: LOGGED_USER_ID
  };

  const onSubmit = async (values, { setSubmitting }) => {
    try {
      const {
        data: { body }
      } = await TaskService.post(values);

      setTasks((prevTasks) => [...prevTasks, body]);

      snackbarSuccess();
      handleOnClose();
    } catch (error) {
    } finally {
      setSubmitting(false);
    }
  };

  const form = useFormik({
    validationSchema,
    initialValues,
    onSubmit
  });

  const handleOnClose = () => setTaskDialog({ open: false });

  return <TaskDialogView {...{ form, responsibles, handleOnClose }} />;
};

export default TaskDialog;

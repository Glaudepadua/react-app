import { useFormik } from "formik";
import TaskService from "modules/tasks/services/task.service";
import { useEffect, useState } from "react";
import { LOGGED_USER_ID, TASK_STATUS } from "_common/constants/common.constants";
import Yup from "_common/utils/YupValidator";
import TaskDialogView from "./TaskDialogView";

const TaskDialog = () => {
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

  const onSubmit = () => {};

  const form = useFormik({
    validationSchema,
    initialValues,
    onSubmit
  });

  return <TaskDialogView {...{ form, responsibles }} />;
};

export default TaskDialog;

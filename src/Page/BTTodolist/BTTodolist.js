import hinhAnh from "../BTTodolist/bg.png";
import React, { useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  addTaskList,
  deleteTaskAPI,
  getTaskList,
  checkTaskNameAPI,
  rejectTask123API,
} from "../../Redux/action/actionToDoList/actiongToDoList";
import "../BTTodolist/ToDoList.css";

export default function BTTodolist() {
  const { taskList } = useSelector((state) => state.ReducerToDoList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTaskList());
  }, []);
  const renderToDo = () => {
    return taskList
      .filter((item) => !item.status)
      .map((item, index) => {
        return (
          <li key={index}>
            <span>{item.taskName}</span>
            <div className="buttons">
              <button
                type="submit"
                onClick={() => {
                  deleteTask(item.taskName);
                }}
                className="remove"
              >
                <i className="fa fa-trash-alt" />
              </button>
              <button
                type="submit"
                onClick={() => {
                  checkTaskName(item.taskName);
                }}
                className="complete"
              >
                <i className="far fa-check-circle" />
                <i className="fas fa-check-circle" />
              </button>
            </div>
          </li>
        );
      });
  };
  const renderToDoDone = () => {
    return taskList
      .filter((item) => item.status)
      .map((item, index) => {
        return (
          <li key={index}>
            <span>{item.taskName}</span>
            <div className="buttons">
              <button
                type="submit"
                onClick={() => {
                  deleteTask(item.taskName);
                }}
                className="remove"
              >
                <i className="fa fa-trash-alt" />
              </button>
              <button
                onClick={() => {
                  rejectTask123(item.taskName);
                }}
                type="submit"
                className="complete"
              >
                <i className="far fa-check-circle" />
                <i className="fas fa-check-circle" />
              </button>
            </div>
          </li>
        );
      });
  };
  const formik = useFormik({
    initialValues: {
      taskName: "",
    },
    validationSchema: Yup.object().shape({
      taskName: Yup.string().required("Khong Duoc Bo Trong"),
    }),
    onSubmit: (values) => {},
  });

  const deleteTask = (taskName) => {
    dispatch(deleteTaskAPI(taskName));
    alert("Delete Success");
  };
  const checkTaskName = (taskName) => {
    dispatch(checkTaskNameAPI(taskName));
    alert("Check Task Success");
  };
  const rejectTask123 = (taskName) => {
    dispatch(rejectTask123API(taskName));
    alert("Reject Task Success");
  };
  const addTask123 = (taskName) => {
    dispatch(addTaskList(taskName));
  };
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="card">
        <div className="card__header">
          <img src={hinhAnh} alt="abc" />
        </div>
        {/* <h2>hello!</h2> */}
        <div className="card__body">
          <div className="card__content">
            <div className="form-group">
              <div className="card__title">
                <h2>My Tasks</h2>
                <p>September 9,2020</p>
              </div>
              <div className="card__add">
                <input
                  onChange={formik.handleChange}
                  name="taskName"
                  id="newTask"
                  type="text"
                  placeholder="Enter an activity..."
                />

                <button
                  onClick={() => {
                    addTask123(formik.values);
                  }}
                  type="submit"
                  id="addItem"
                >
                  <i className="fa fa-plus" />
                </button>
              </div>
            </div>
            <p className="text text-danger">{formik.errors.taskName}</p>

            <div className="card__todo">
              {/* Uncompleted tasks */}
              <ul className="todo" id="todo">
                {renderToDo()}
              </ul>
              {/* Completed tasks */}
              <ul className="todo" id="completed">
                {renderToDoDone()}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

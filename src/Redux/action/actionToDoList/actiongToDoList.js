import Axios from "axios";

export const getTaskList = () => {
  return async (dispatch) => {
    try {
      const promise = await Axios({
        url: "http://svcy.myclass.vn/api/ToDoList/GetAllTask",
        method: "GET",
      });
      dispatch({
        type: "GET_API_TODO",
        taskList: promise.data,
      });
    } catch (err) {
      console.log(err.response.data);
    }
  };
};
export const addTaskList = (taskName) => {
  return async (dispatch) => {
    try {
      const promise = await Axios({
        url: "http://svcy.myclass.vn/api/ToDoList/AddTask",
        method: "POST",
        data: taskName,
      });
      dispatch(getTaskList());
      alert("Add Task Success");
    } catch (err) {
      alert(err.response.data);
    }
  };
};
export const deleteTaskAPI = (taskName) => {
  return async (dispatch) => {
    try {
      const promise = await Axios({
        url: `http://svcy.myclass.vn/api/ToDoList/deleteTask?taskName=${taskName}`,
        method: "DELETE",
      });
      dispatch(getTaskList());
    } catch (err) {
      console.log(err.response.data);
    }
  };
};
export const checkTaskNameAPI = (taskName) => {
  return async (dispatch) => {
    try {
      const promise = await Axios({
        url: `http://svcy.myclass.vn/api/ToDoList/doneTask?taskName=${taskName}`,
        method: "PUT",
      });
      dispatch(getTaskList());
    } catch (err) {
      console.log(err.response.data);
    }
  };
};
export const rejectTask123API = (taskName) => {
  return async (dispatch) => {
    try {
      const promise = await Axios({
        url: `http://svcy.myclass.vn/api/ToDoList/rejectTask?taskName=${taskName}`,
        method: "PUT",
      });
      dispatch(getTaskList());
    } catch (err) {
      console.log(err.response.data);
    }
  };
};

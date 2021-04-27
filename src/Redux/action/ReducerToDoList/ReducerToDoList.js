const stateDefault = {
  taskList: [],
};
export const ReducerToDoList = (state = stateDefault, action) => {
  switch (action.type) {
    case "GET_API_TODO": {
      return { ...state, taskList: action.taskList };
    }
    case "ADD_TASK_LIST":
    default:
      return { ...state };
  }
};

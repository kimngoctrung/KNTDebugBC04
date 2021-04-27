import { ToDoListDarkTheme } from "../../Page/ToDoListStyle/Themes/ToDoListDarkTheme";
import { ToDoListPrimaryTheme } from "../../Page/ToDoListStyle/Themes/ToDoListPrimaryTheme";
import { arrTheme } from "../../Page/ToDoListStyle/Themes/QuanLyTheme";
let taskLocal = JSON.parse(localStorage.getItem("TaskKNT"));

const initialState = {
  themeToDoList: ToDoListPrimaryTheme,
  taskList: taskLocal,
  taskEditKNT: { id: "task-1", taskName: "tao la Trum", doneTask: true },
};

export const ReducerToDoListStyle = (state = initialState, action) => {
  switch (action.type) {
    case "GET_LOCAL_KNT": {
      return { ...state, taskList: action.taskLocal };
    }
    case "ADD_TASK_KNT": {
      const taskListReset = [...state.taskList];
      let taskNameTrung = taskListReset.findIndex(
        (item) => item.taskName == action.values.taskName
      );
      if (action.values.taskName === "") {
        alert("task name sai dinh dang");
        return { ...state };
      } else if (taskNameTrung !== -1) {
        alert("Task Co Roi");
        return { ...state };
      } else {
        taskListReset.push(action.values);
        localStorage.setItem("TaskKNT", JSON.stringify(taskListReset));
      }
      //   let index = taskListReset.findIndex(
      //     (item) => item.taskName === action.values.taskName
      //   );
      //   if (index !== 1) {
      //     alert("Task Đã Có Rồi");
      //   } else {

      //   }
      state.taskList = taskListReset;
      return { ...state };
    }
    case "CHECK_TASK_KNT": {
      const taskListReset = [...state.taskList];
      const indexDone = taskListReset.findIndex(
        (task) => task.id === action.item.id
      );
      if (indexDone !== -1) {
        taskListReset[indexDone].doneTask = true;
      }
      localStorage.setItem("TaskKNT", JSON.stringify(taskListReset));
      return { ...state, taskList: taskListReset };
    }
    case "XOA_TASK_KNT": {
      const indexABC = state.taskList.findIndex(
        (item) => item.id === action.item.id
      );
      if (indexABC !== -1) {
        state.taskList.splice(indexABC, 1);
      }
      localStorage.setItem("TaskKNT", JSON.stringify(state.taskList));
      return { ...state };
    }
    case "CHANGE_THEME_KNT": {
      const indexTheme = arrTheme.find((item) => item.id == action.value);
      if (indexTheme !== -1) {
        state.themeToDoList = { ...indexTheme.theme };
      }
      return { ...state };
    }
    case "EDIT_TASK_KNT": {
      console.log(action.item);
      state.taskEditKNT = action.item;
    }

    default:
      return { ...state };
  }
};

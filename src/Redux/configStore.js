import { applyMiddleware, combineReducers, createStore } from "redux";
import { phimReducer } from "./phimReducer/phimReducer";
import reuduxThunk from "redux-thunk";
import { NguoiDungReducer } from "./NguoiDungReducer/NguoiDungReducer";
import { ReducerToDoList } from "./action/ReducerToDoList/ReducerToDoList";
import { PhimReducer, PhimReducerDatVe } from "./PhimReducerKNT/PhimReducerKNT";
import { ReducerToDoListStyle } from "./ReducerToDoListStyle/ReducerToDoListStyle";

const rootReducer = combineReducers({
  phimReducer: phimReducer,
  NguoiDungReducer: NguoiDungReducer,
  ReducerToDoList: ReducerToDoList,
  PhimReducerDatVe: PhimReducerDatVe,
  ReducerToDoListStyle: ReducerToDoListStyle,
});
export const store = createStore(rootReducer, applyMiddleware(reuduxThunk));

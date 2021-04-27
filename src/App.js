import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Component/Header/Header";
import Home from "./Page/Home/Home";
import Detail from "./Page/Detail/Detail";
import Login from "./Page/Login/Login";
import BTTodolist from "./Page/BTTodolist/BTTodolist";
import DemoAbc from "./Component/Acb/DemoAbc";
import ToDoListStyle from "./Page/ToDoListStyle/ToDoListStyle";
import BaiTapDatVeKNT from "./Page/BaiTapPhim/BaiTapDatVeKNT";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route path="/" exact component={Home} />
      <Route path="/home" exact component={Home} />
      <Route path="/detail/:id" exact component={Detail} />
      <Route path="/login" exact component={Login} />
      <Route path="/todolist" exact component={BTTodolist} />
      <Route path="/demoabc" exact component={DemoAbc} />
      <Route path="/todoliststyle" exact component={ToDoListStyle} />
      <Route path="/datvexemphim" exact component={BaiTapDatVeKNT} />
    </BrowserRouter>
  );
}

export default App;

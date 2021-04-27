import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { NguoiDungReducer } from "../../Redux/NguoiDungReducer/NguoiDungReducer";

export default function Header() {
  const { taiKhoan } = useSelector((state) => state.NguoiDungReducer);
  console.log(taiKhoan);
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <NavLink className="navbar-brand" to="/">
          Navbar
        </NavLink>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item ">
              <NavLink className="nav-link" to="/home">
                Home <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              {taiKhoan.trim() !== "" ? (
                <NavLink className="nav-link" to="/">
                  {taiKhoan}
                </NavLink>
              ) : (
                <NavLink
                  activeStyle={{ backgroundColor: "aqua" }}
                  activeClassName="text-danger"
                  className="nav-link"
                  to="/login"
                >
                  Login
                </NavLink>
              )}
            </li>
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                to="/"
                id="dropdownId"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </NavLink>
              <div className="dropdown-menu" aria-labelledby="dropdownId">
                <NavLink className="dropdown-item" to="/todolist">
                  Todolist
                </NavLink>
                <NavLink className="dropdown-item" to="/action2">
                  Action 2
                </NavLink>
              </div>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="text"
              placeholder="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}

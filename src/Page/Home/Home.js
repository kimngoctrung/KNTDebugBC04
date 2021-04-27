import React, { useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { layDanhSachPhim1 } from "../../Redux/action/actionPhim";
import { axios } from "axios";

export default function Home(props) {
  const { mangPhim } = useSelector((state) => state.phimReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(layDanhSachPhim1("GP01"));
  }, []);
  const renderPhim = () => {
    return mangPhim.map((item, index) => {
      return (
        <div key={index} className="col-4 mt-5">
          <div className="card text-white bg-dark">
            <img
              style={{ width: "100%" }}
              className="card-img-top"
              src={item.hinhAnh}
              alt={item.tenPhim}
            />
            <div className="card-body">
              <h4 className="card-title">{item.tenPhim}</h4>
              <p className="card-text">{item.moTa}</p>
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <div className="container">
      <h3 className="text-center">Danh Sách Phim</h3>
      <div className="row">{renderPhim()}</div>
    </div>
  );
}

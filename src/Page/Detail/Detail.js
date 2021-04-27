import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { layThongTinPhimAction } from "../../Redux/action/actionPhim";

export default function Detail(props) {
  const dispatch = useDispatch();
  const { chiTietPhim1 } = useSelector((state) => state.phimReducer);
  const id = props.match.params.id;
  useEffect(() => {
    dispatch(layThongTinPhimAction(id));
  }, []);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-4">
          <img
            style={{ width: "100%" }}
            src={chiTietPhim1.hinhAnh}
            alt={chiTietPhim1.tenPhim}
          />
        </div>
        <div className="col-8">
          <table className="table">
            <thead>
              <th>Tên Phim</th>
              <th>{chiTietPhim1.tenPhim}</th>
            </thead>
          </table>
        </div>
      </div>
    </div>
  );
}

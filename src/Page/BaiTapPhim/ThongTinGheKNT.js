import React from "react";
import { connect, useSelector, useDispatch } from "react-redux";

export default function ThongTinGheKNT(props) {
  const { danhSachGheDangDat } = useSelector((state) => state.PhimReducerDatVe);
  const renderThongTinGheKNT = () => {
    return danhSachGheDangDat.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.soGhe}</td>
          <td>{item.gia}</td>
          <td>x</td>
        </tr>
      );
    });
  };

  return (
    <div className=" text-white">
      <h1 className="text-center display-4 mb-5">Danh sách ghế đang chọn</h1>
      <div className="text-left">
        <button className="gheDangChon m-0"></button> Ghế Đang Chọn
      </div>
      <div className="text-left">
        <button className="ghe m-0"></button>Ghế Trống
      </div>
      <div className="text-left">
        <button className="gheDuocChon m-0"></button>Ghế Đã Đặt
      </div>
      <table className="table text-white">
        <thead>
          <tr>
            <th>Số Ghế</th>
            <th>Giá</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{renderThongTinGheKNT()}</tbody>
      </table>
    </div>
  );
}

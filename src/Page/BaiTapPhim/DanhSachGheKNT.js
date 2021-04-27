import React from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import dataGhe from "../../assets/danhSachGhe.json";

export default function DanhSachGheKNT(props) {
  const { danhSachGheDangDat } = useSelector((state) => state.PhimReducerDatVe);
  const dispatch = useDispatch();
  const datGhe = (thongTinGhe) => {
    dispatch({ type: "GHE_DANG_DAT", thongTinGhe: thongTinGhe });
    // console.log(thongTinGhe);
  };
  const rederHangGhe = () => {
    return dataGhe.map((item, index) => {
      return (
        <div key={index}>
          <span className="rowNumber">{item.hang}</span>
          {renderDanhSachGheKNT(item.danhSachGhe, item.hang)}
        </div>
      );
    });
  };
  const renderDanhSachGheKNT = (danhSachGhe, hangGhe) => {
    return danhSachGhe.map((gheKNT, index) => {
      let classGhe = hangGhe !== "" ? "ghe" : "rowNumber";
      let classGheDuocChon = gheKNT.daDat ? "gheDuocChon" : "";
      let classGheDangDat = "";
      let indexGheKNT = danhSachGheDangDat.findIndex(
        (gheDDKNT) => gheDDKNT.soGhe === gheKNT.soGhe
      );

      if (indexGheKNT !== -1) {
        classGheDangDat = "gheDangChon";
      }
      return (
        <button
          onClick={() => {
            datGhe(gheKNT);
          }}
          className={` ${classGheDangDat} ${classGheDuocChon} ${classGhe}`}
        >
          {gheKNT.soGhe}
        </button>
      );
    });
  };
  return (
    <div className="container mt-5 text-white">
      <h1
        style={{ textTransform: "uppercase" }}
        className="text-center text-white"
      >
        đặt vé xem phim cyberlern.vn
      </h1>
      <div className="text-center text-light">
        <h2>Màn Hình</h2>
        <div className="screen"></div>
        {rederHangGhe()}
      </div>
    </div>
  );
}

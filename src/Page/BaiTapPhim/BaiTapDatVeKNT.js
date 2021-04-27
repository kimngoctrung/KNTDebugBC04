import React from "react";
import DanhSachGheKNT from "./DanhSachGheKNT";
import ThongTinGheKNT from "./ThongTinGheKNT";
import "../../assets/BaiTapBookingTicket.css";

export default function BaiTapDatVeKNT(props) {
  return (
    <div
      className="bookingMovie"
      style={{ height: "100vh", overflowX: "hidden" }}
    >
      <div
        style={{
          backgroundColor: "rgba(0,0,0,0.5",
          width: "100%",
          height: "100vh",
          // backgroundSize: "100%",
        }}
      >
        <div className="container">
          <div className="row ">
            <div className="col-8">
              <DanhSachGheKNT />
            </div>
            <div className="col-4">
              <ThongTinGheKNT />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

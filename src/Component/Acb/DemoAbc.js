import React, { useState, useEffect } from "react";

export default function DemoAbc() {
  let [numBer, setNumBer] = useState(1);
  const handleNumBer = () => {
    setNumBer((numBer += 1));
  };
  return (
    <div style={{ width: "400px", height: "400px" }} className="card text-left">
      <img
        style={{ width: "300px", height: "300px" }}
        className="card-img-top"
        src="https://danviet.mediacdn.vn/2020/7/1/u5-15935680709581348231404.jpg"
      />
      <div className="card-body">
        <div className="row">
          <button
            onClick={() => {
              handleNumBer();
            }}
            className="btn"
          >
            <img
              width="20px"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/220px-Heart_coraz%C3%B3n.svg.png"
              alt=""
            />
          </button>
          <p>{numBer}</p>
        </div>
      </div>
    </div>
  );
}

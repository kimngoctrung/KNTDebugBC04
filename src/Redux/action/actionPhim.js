import axios from "axios";

export const layDanhSachPhim1 = (maNhom) => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=${maNhom}`,
        method: "GET",
      });
      dispatch({
        type: "SET_MANG_PHIM_1",
        mangPhim: result.data,
      });
    } catch (errors) {
      console.log(errors);
    }
  };
};
export const layThongTinPhimAction = (maPhim) => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`,
        method: "GET",
      });
      dispatch({
        type: "SET_THONG_TIN_PHIM_1",
        chiTietPhim1: result.data,
      });
    } catch (errors) {
      console.log(errors);
    }
  };
};

import axios from "axios";

export const dangNhapUser = (userLogin) => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
        method: "POST",
        data: userLogin,
      });
      console.log(result);
      dispatch({
        type: "XU_LY_NGUOI_DUNG",
        taiKhoan: result.data.taiKhoan,
      });
      console.log(result.data);
      localStorage.setItem("userLogin", JSON.stringify(result.data));
    } catch (errors) {
      console.log(errors.response?.data);
    }
  };
};

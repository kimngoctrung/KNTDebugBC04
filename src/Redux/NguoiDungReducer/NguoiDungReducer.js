let tenDN = "";
if (localStorage.getItem("userLogin")) {
  let userLogin = JSON.parse(localStorage.getItem("userLogin"));
  tenDN = userLogin.taiKhoan;
}
const stateDefault = {
  taiKhoan: tenDN,
};
export const NguoiDungReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "XU_LY_NGUOI_DUNG": {
      state.taiKhoan = action.taiKhoan;
      return { ...state };
    }
    default:
      return { ...state };
  }
};

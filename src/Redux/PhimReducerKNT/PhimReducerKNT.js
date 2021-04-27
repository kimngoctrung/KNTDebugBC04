import { act } from "react-dom/cjs/react-dom-test-utils.production.min";
import ThongTinGheKNT from "../../Page/BaiTapPhim/ThongTinGheKNT";

const stateDefault = {
  danhSachGheDangDat: [],
};
export const PhimReducerDatVe = (state = stateDefault, action) => {
  switch (action.type) {
    case "GHE_DANG_DAT": {
      const danhSachGheDangDatReset = [...state.danhSachGheDangDat];
      let index = danhSachGheDangDatReset.findIndex(
        (item) => item.soGhe === action.thongTinGhe.soGhe
      );
      if (index !== -1) {
        danhSachGheDangDatReset.splice(index, 1);
      } else {
        danhSachGheDangDatReset.push(action.thongTinGhe);
      }
      console.log(danhSachGheDangDatReset);
      state.danhSachGheDangDat = danhSachGheDangDatReset;
      return { ...state };
    }
    default:
      return { ...state };
  }
};

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { dangNhapUser } from "../../Redux/action/actionUser";

export default function Login() {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },
    validationSchema: Yup.object().shape({
      taiKhoan: Yup.string().required("Tên đăng nhập không được bỏ trống"),
      matKhau: Yup.string()
        .required("Mật Khẩu không được bỏ trống")
        .min(2, "Mật Khẩu tối thiểu 6 kí tự")
        .max(32, "Mật khẩu tối thiể 32 kí tự"),
    }),
    onSubmit: (values) => {
      dispatch(dangNhapUser(values));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className="container">
      <h3 className="text-center">Đăng Nhập</h3>
      <div className="row">
        <div className="col-6">
          <div className="form-group">
            <p>Tên Đăng Nhập</p>
            <input
              onChange={formik.handleChange}
              type="text"
              className="form-control"
              name="taiKhoan"
              id
              aria-describedby="helpId"
              placeholder
            />
            <p className="text-danger">{formik.errors.tenDangNhap}</p>
          </div>
          <div className="form-group">
            <p>Mật Khẩu</p>
            <input
              onChange={formik.handleChange}
              type="text"
              className="form-control"
              name="matKhau"
              id
              aria-describedby="helpId"
              placeholder
            />
            <p className="text-danger">{formik.errors.matKhau}</p>
          </div>
          <button className="btn btn-outline-info">Đăng Nhập</button>
        </div>
      </div>
    </form>
  );
}

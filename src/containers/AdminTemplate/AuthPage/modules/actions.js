import {
  AUTH_PAGE_REQUEST,
  AUTH_PAGE_SUCCESS,
  AUTH_PAGE_FAILED,
} from "./constants";
import Axios from "axios";

//Function to Intergrate login API. Call this in component.
export const actLogInAPI = (user, history) => {
  return (dispatch) => {
    dispatch(actLogInRequest());
    Axios({
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      method: "POST",
      data: user,
    })
      .then((result) => {
        dispatch(actLogInSuccess(result.data));
        console.log("log in success");
        console.log(result.data);

        if (result.data.maLoaiNguoiDung === "QuanTri") {
          //Neu login thanh cong, chuyen den trang dashboard + luu vao local storage de giu trang thai login sau khi tat may
          localStorage.setItem("UserAdmin", JSON.stringify(result.data));
          //=> tu component van chuyen history qua action
          history.push("/dashboard");
        } else {
          alert("Not allowed LOL");
          //Test: nguyendp - 123456
        }
      })
      .catch((error) => {
        dispatch(actLogInFail(error));
      });
  };
};

const actLogInRequest = () => {
  return {
    type: AUTH_PAGE_REQUEST,
  };
};

const actLogInSuccess = (data) => {
  return {
    type: AUTH_PAGE_SUCCESS,
    payload: data,
  };
};

const actLogInFail = (err) => {
  return {
    type: AUTH_PAGE_FAILED,
    payload: err,
  };
};

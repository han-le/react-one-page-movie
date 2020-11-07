import {
  ADD_USER_REQUEST,
  ADD_USER_SUCCESS,
  ADD_USER_FAILED,
} from "./constants";
import Axios from "axios";

//Function to Intergrate login API. Call this in component.
export const addUserAPI = (user) => {
  //lay tokens
  let accessToken = JSON.parse(localStorage.getItem("UserAdmin")).accessToken;

  if (localStorage.getItem("UserAdmin"))
    return (dispatch) => {
      dispatch(actAddUserRequest());
      Axios({
        url:
          "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung",
        method: "POST",
        data: user,
        //Lay token
        headers: {
          Authorization: `Bearer + ${accessToken}`,
        },
      })
        .then((result) => {
          //Thanh cong thi cho dispatch action
          dispatch(actAddUserSuccess(result.data));
          console.log("add user success");
        })
        .catch((error) => {
          dispatch(actAddUserFail(error));
        });
    };
};

const actAddUserRequest = () => {
  return {
    type: ADD_USER_REQUEST,
  };
};

const actAddUserSuccess = (data) => {
  return {
    type: ADD_USER_SUCCESS,
    payload: data,
  };
};

const actAddUserFail = (err) => {
  return {
    type: ADD_USER_FAILED,
    payload: err,
  };
};

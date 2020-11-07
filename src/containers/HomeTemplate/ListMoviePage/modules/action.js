import {
  LIST_MOVIE_REQUEST,
  LIST_MOVIE_SUCCESS,
  LIST_MOVIE_FAIL,
} from "./constant";

import Axios from "axios";

//Viet ham goi AXIOS
// Axios({
//   url:
//     "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01", //this is a request
//   method: "GET",
// })
export const actListMovieAPI = () => {
  return (dispatch) => {
    dispatch(actListMovieRequest());
    Axios({
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01", //this is a request
      method: "GET",
    })
      .then((result) => {
        dispatch(actListMovieSuccess(result.data));
      })
      .catch((error_) => {
        dispatch(actListMovieFail(error_));
      });
  };
};

export const actListMovieRequest = () => {
  return {
    type: LIST_MOVIE_REQUEST,
    //payload: no need
  };
};

//Truong hop thanh cong
export const actListMovieSuccess = (data) => {
  return {
    type: LIST_MOVIE_SUCCESS,
    payload: data, //gui data len reducer
  };
};

//Truong hop that bai
export const actListMovieFail = (err) => {
  return {
    type: LIST_MOVIE_FAIL,
    payload: err, //gui loi len reducer
  };
};

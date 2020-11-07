import Axios from "axios";
import {
  DETAILS_PAGE_REQUEST,
  DETAILS_PAGE_SUCCESS,
  DETAILS_PAGE_FAILED,
} from "./constants";

export const actDetailsAPI = (id) => {
  return (dispatch) => {
    dispatch(actDetailsRequest()); //bao cho reducer chuan bi gui thong tin
    Axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`,
      method: "GET",
    })
      .then((result) => {
        dispatch(actDetailsSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actDetailsFailed(err));
      });
  };
};

export const actDetailsRequest = () => {
  return {
    type: DETAILS_PAGE_REQUEST,
  };
};
export const actDetailsSuccess = (details_data) => {
  return {
    type: DETAILS_PAGE_SUCCESS,
    payload: details_data,
  };
};
export const actDetailsFailed = (err) => {
  return {
    type: DETAILS_PAGE_FAILED,
    payload: err,
  };
};

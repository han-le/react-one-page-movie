import { combineReducers } from "redux";
import listMovieReducer from "./../../containers/HomeTemplate/ListMoviePage/modules/reducer";
import detailsMovieReducer from "./../../containers/HomeTemplate/DetailPage/modules/reducer";
import authReducer from "./../../containers/AdminTemplate/AuthPage/modules/reducer";
import userReducer from "./../../containers/AdminTemplate/User/modules/reducer";

const rootReducer = combineReducers({
  listMovieReducer,
  detailsMovieReducer,
  authReducer,
  userReducer, //goi trong ham mapStateToProps trong component
});

export default rootReducer;

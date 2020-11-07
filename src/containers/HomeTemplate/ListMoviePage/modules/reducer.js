import {
  LIST_MOVIE_REQUEST,
  LIST_MOVIE_SUCCESS,
  LIST_MOVIE_FAIL,
} from "./constant";

//by default
let initialState = {
  loading: false, //ban dau chua load nen false
  data: null, //ban dau chua co data dau ma
  err: null,
};

const listMovieReducer = (state = initialState, action) => {
  //TODO:
  switch (action.type) {
    //Phai lay data truoc moi co success or fail sau
    case LIST_MOVIE_REQUEST:
      state.loading = true; //Trong luc dang request thi hien "loading" len UI
      state.data = null;
      state.err = null;
      return { ...state };

    //Khi nhan duoc thanh cong du lieu
    case LIST_MOVIE_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.err = null;
      return { ...state };

    //Khi that bai trong viec nhan du lieu
    case LIST_MOVIE_FAIL:
      state.loading = false;
      state.data = null;
      state.err = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};

export default listMovieReducer;

import {
  DETAILS_PAGE_REQUEST,
  DETAILS_PAGE_SUCCESS,
  DETAILS_PAGE_FAILED,
} from "./constants";

let initialState = {
  loading: false,
  data: null,
  err: null,
};

const detailsMovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case DETAILS_PAGE_REQUEST:
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };

    case DETAILS_PAGE_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.err = null;
      return { ...state };

    case DETAILS_PAGE_FAILED:
      state.loading = false;
      state.data = null;
      state.err = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};

export default detailsMovieReducer;

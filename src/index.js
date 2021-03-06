import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

//=============Bootstrap===============
// css
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// js
import "../node_modules/bootstrap/dist/js/bootstrap.min";
import "../node_modules/jquery/dist/jquery.slim.min";
import "../node_modules/popper.js/dist/umd/popper.min";

//============ REDUX
import { createStore } from "redux";
import { applyMiddleware, compose } from "redux"; //thu vien bat dong bo
import thunk from "redux-thunk"; //thu vien bat dong bo
import { Provider } from "react-redux";
import rootReducer from "./redux/reducers";

//Giai quyet viec bat dong bo reducer
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

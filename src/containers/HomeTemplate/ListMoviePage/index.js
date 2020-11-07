import React, { Component } from "react";

import Axios from "axios";
import Movie from "./../../../components/Movie";
import { connect } from "react-redux";
import {
  actListMovieAPI,
  actListMovieRequest,
  actListMovieSuccess,
  actListMovieFail,
} from "./modules/action";

import Loader from "./../../../components/Loader";

class ListMoviePage extends Component {
  //Ham tao ra state de chay lai render()
  constructor(props) {
    super(props);
    // this.state = {
    //   listMovie: [], //Khi lay duoc data tu API se add item to this array
    //   loading: false, //Tinh nang hien "loading" khi page load
    // };
  }

  componentDidMount() {
    // this.setState({ loading: true }); //Loading icon when waiting for Axios

    // this.props.listMovieRequest();
    // Axios({
    //   url:
    //     "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01", //this is a request
    //   method: "GET",
    // })
    //   .then((result) => {
    //     console.log(result.data); //result.data: mang du lieu toan bo phim. Co the render o day luon cung duoc
    //     this.setState({
    //       listMovie: result.data,
    //       loading: false, //Load false se mat di
    //     });
    //     this.props.listMovieSuccess(result.data);
    //   })
    //   .catch((error_) => {
    //     console.log(error_);
    //     this.props.listMovieFail(error_);
    //   });

    this.props.listMovieAPI();
  }

  renderHTML = () => {
    // const listMovie = this.state.listMovie;
    const listMovie = this.props.listMovie;

    //Kiem tra da load listMovie chua?
    if (listMovie && listMovie.length > 0) {
      return listMovie.map((movie) => {
        return <Movie props_ListMovie={movie} key={movie.maPhim} />;
      });
    }
  };

  render() {
    //Show Loading... when API has not finished downloading data
    // const loading = this.state.loading;
    const loading = this.props.loading;
    //If loading is true => return Loading Icon
    if (loading) {
      return (
        <div>
          <Loader />
        </div>
      );
    }

    return (
      <div className="container">
        <h3 className="text-center mt-3 mb-3">Today's Movies</h3>
        <div className="row">{this.renderHTML()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.listMovieReducer.loading,
    listMovie: state.listMovieReducer.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    listMovieAPI: () => {
      dispatch(actListMovieAPI());
    },
    // listMovieRequest: () => {
    //   dispatch(actListMovieRequest());
    // },
    // listMovieSuccess: (data) => {
    //   dispatch(actListMovieSuccess(data));
    // },
    // listMovieFail: (err) => {
    //   dispatch(actListMovieFail(err));
    // },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListMoviePage);

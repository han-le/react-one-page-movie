import React, { Component } from "react";

import Axios from "axios";
import Movie from "./../../../components/Movie";

export default class ListMoviePage extends Component {
  //Ham tao ra state de chay lai render()
  constructor(props) {
    super(props);
    this.state = {
      listMovie: [], //Khi lay duoc data tu API se add item to this array\
      loading: false,
    };
  }

  componentDidMount() {
    this.setState({ loading: true }); //Loading icon when waiting for Axios

    Axios({
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
      method: "GET",
    })
      .then((result) => {
        console.log(result.data); //result.data: mang du lieu toan bo phim. Co the render o day luon cung duoc
        this.setState({ listMovie: result.data, loading: false });
      })
      .catch((error_) => {
        console.log(error_);
      });
  }

  renderHTML = () => {
    const listMovie = this.state.listMovie;
    return listMovie.map((movie) => {
      return <Movie props_ListMovie={movie} key={movie.maPhim} />;
    });
  };

  render() {
    //Show Loading... when API has not finished downloading data
    const loading = this.state.loading;
    //If loading is true => return Loading Icon
    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div className="container">
        <h5 className="text-center">Today's Movies</h5>
        <div className="row">{this.renderHTML()}</div>
      </div>
    );
  }
}

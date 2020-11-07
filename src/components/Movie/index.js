import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Movie extends Component {
  render() {
    const movie = this.props.props_ListMovie;

    return (
      <div className="col-md-3">
        <div className="card">
          <img className="card-img-top" src={movie.hinhAnh} alt />
          <div className="card-body">
            <h4 className="card-title">{movie.tenPhim}</h4>
            <p className="card-text">{movie.moTa}</p>
            <Link className="btn btn-warning" to={`/details/${movie.maPhim}`}>
              DETAILS
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

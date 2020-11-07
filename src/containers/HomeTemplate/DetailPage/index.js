//Details for Movies

import React, { Component } from "react";
import { connect } from "react-redux";
import { actDetailsAPI } from "./modules/actions";
import Loader from "./../../../components/Loader";
import { Link } from "react-router-dom";

class DetailPage extends Component {
  componentDidMount() {
    //Test xem component co cai props gi?
    //Props nay do <Route> truyen vao, only apply for component duoc wrapped boi Route
    console.log("Props of Detail Page: ");
    console.log(this.props);

    const id = this.props.match.params.id;
    console.log("id: " + id);

    this.props.getDetailMovie(id);

    console.log("-------------------");
  }

  /*
  Viet ham render thong tin phim lay ve tu state. 
  Goi ham nay trong render()
  Problem: 
    + Ham render chay lan dau tien data chua co load xong => null
    + Ham render chay lan 2, luc nay da co data => cho render ra ngoai
  */

  renderDetails = () => {
    console.log("Render Details of Movie Based On ID: ");
    console.log(this.props);
    const details = this.props.movieDetails;

    //or if(details)
    if (details !== null) {
      console.log("details");
      console.log(details);

      // Loop array lich chieu
      const arrayLichChieu = details.lichChieu;
      console.log(arrayLichChieu);

      let mappedArray = arrayLichChieu.map((item) => {
        return (
          <tr key={item.maLichChieu}>
            <td>{item.thongTinRap.tenCumRap}</td>
            <td>{item.thongTinRap.tenRap}</td>
            <td>{new Date(item.ngayChieuGioChieu).toLocaleDateString()}</td>
            <td>{item.giaVe}</td>
            <td>
              <Link className="btn btn-dark" to="/">
                Buy Ticket
              </Link>
            </td>
          </tr>
        );
      });

      return (
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-6">
              <img src={details.hinhAnh} />
            </div>
            <div className="col-md-6">
              <h3>{details.tenPhim}</h3>
              <p>Introduction: {details.moTa}</p>
              <p>
                Released Date:{" "}
                {new Date(details.ngayKhoiChieu).toLocaleDateString()}
              </p>
            </div>
          </div>
          <iframe
            width="560"
            height="315"
            src={details.trailer}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <h5 className="mt-5 mb-5">Lich chieu</h5>
          <div>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Location</th>
                  <th scope="col">Theater</th>
                  <th scope="col">Date</th>
                  <th scope="col">Time</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>{mappedArray}</tbody>
            </table>
          </div>
          );
        </div>
      );
    }
  };

  render() {
    console.log("render");
    const loader = this.props.loading;
    if (loader) {
      return <Loader />;
    }

    return (
      <div className="container">
        <h3 className="text-center mt-5 mb-5">Details page </h3>
        <div>{this.renderDetails()}</div>
      </div>
    );
  }
}

//mapStateToProps is a function that you would use to provide the store data to your component
//SYNXTAX: const mapStateToProps = (state) => {  return { things: state.things } };

const mapStateToProps = (state) => {
  return {
    movieDetails: state.detailsMovieReducer.data,
    loading: state.detailsMovieReducer.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getDetailMovie: (id) => {
      //goi ham nay o DidMount
      dispatch(actDetailsAPI(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailPage);

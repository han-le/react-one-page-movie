import React, { useEffect } from "react";

import Movie from "./../../../components/Movie";
import Loader from "./../../../components/Loader";

import { actListMovieAPI } from "./../ListMoviePage/modules/action";
import { connect } from "react-redux";

//Goi API truc tiep o day
function HomePage(props) {
  useEffect(() => {
    props.listMovieAPI();
  }, []);

  const renderHTML = () => {
    const loading = props.loading;
    const listMovie = props.listMovie;

    // Chay trang loading
    if (loading) {
      return (
        <div>
          <Loader />
        </div>
      );
    }
    // const listMovie = this.props.listMovie;
    if (listMovie && listMovie.length > 0) {
      return listMovie.map((movie) => {
        return <Movie props_ListMovie={movie} key={movie.maPhim} />;
      });
    }
  };

  return (
    <div className="container">
      <h3 className="text-center mt-5 mb-5">demo redux with hooks</h3>
      <div className="container">
        <div className="row">{renderHTML()}</div>
      </div>
    </div>
  );
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

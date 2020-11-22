import React, { useEffect, useState } from "react";
import Axios from "axios";
import Movie from "./../../../components/Movie";
import Loader from "./../../../components/Loader";

//Goi API truc tiep o day
export default function AboutPage() {
  const [listMovie, setListMovie] = useState([]);
  const [loading, setLoading] = useState(false);

  // const [state, setState] = useState({ listMovie: [], loading: false });

  useEffect(() => {
    setLoading(true);

    Axios({
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01", //this is a request
      method: "GET",
    }).then((result) => {
      console.log(result.data);
      //update state:
      setListMovie(result.data);
      setLoading(false);
    });
  }, []);

  const renderHTML = () => {
    //Chay trang loading
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
      <h6>demo movie list with wooks</h6>
      <div className="container">
        <div className="row">{renderHTML()}</div>
      </div>
    </div>
  );
}

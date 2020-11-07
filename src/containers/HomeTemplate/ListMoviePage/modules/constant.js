// componentDidMount() {
//     this.setState({ loading: true }); //Loading icon when waiting for Axios

//     Axios({
//       url:
//         "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01", //Request
//       method: "GET",
//     })
//       .then((result) => {
//         console.log(result.data); //result.data: mang du lieu toan bo phim. Co the render o day luon cung duoc
//         this.setState({
//           listMovie: result.data,
//           loading: false, //Load false se mat di
//         });
//       })
//       .catch((error_) => {
//         console.log(error_);
//       });
//   }

//Tao ra 3 hang do tuong ung voi cai goi o component trong componentDidMount
export const LIST_MOVIE_REQUEST = "listMovieReducer/LIST_MOVIE_REQUEST";
//      Axios({
//       url:
//         "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
//       method: "GET",
//     })
export const LIST_MOVIE_SUCCESS = "listMovieReducer/LIST_MOVIE_SUCCESS";
//       .then((result) => {
//         console.log(result.data); //result.data: mang du lieu toan bo phim. Co the render o day luon cung duoc
//         this.setState({
//           listMovie: result.data,
//           loading: false, //Load false se mat di
//         });
//       })
export const LIST_MOVIE_FAIL = "listMovieReducer/LIST_MOVIE_FAIL";
//       .catch((error_) => {
//         console.log(error_);
//       });

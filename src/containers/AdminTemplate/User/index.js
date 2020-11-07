import React, { Component } from "react";
import { addUserAPI } from "./modules/actions";
import { connect } from "react-redux";
import Loader from "./../../../components/Loader";

class UserPage extends Component {
  //Lien quan toi form phai co ham khoi Tao
  constructor(props) {
    super(props);
    this.state = {
      taiKhoan: "",
      matKhau: "",
      hoTen: "",
      email: "",
      soDt: "",
      maNhom: "",
      maLoaiNguoiDung: "",
    };
  }

  handleOnChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state); //Kiem tra xem state da chua nhung gi minh nhap chua?
    this.props.addUserAPI(this.state); //Goi props
  };

  renderNoti = () => {
    const { error } = this.props;
    if (error) {
      if (error.response.status === 401)
        return (
          <div className="alert alert-danger">You don't have token yet</div>
        );
      if (error.response && error.response.data) {
        return <div className="alert alert-danger">{error.response.data}</div>;
      }
    }
  };

  render() {
    const { loading } = this.props;
    if (loading) return <Loader />;
    return (
      <form
        className="container"
        style={{ width: "500px" }}
        onSubmit={this.handleSubmit}
      >
        <h3 className="text-center mb-3 mt-3">Thêm người dùng</h3>
        <div className="form-group">
          <span>Tài khoản</span>
          <input
            className="form-control"
            name="taiKhoan"
            onChange={this.handleOnChange}
          />
        </div>
        <div className="form-group">
          <span>Mật khẩu</span>
          <input
            className="form-control"
            name="matKhau"
            onChange={this.handleOnChange}
          />
        </div>
        <div className="form-group">
          <span>Họ tên</span>
          <input
            className="form-control"
            name="hoTen"
            onChange={this.handleOnChange}
          />
        </div>
        <div className="form-group">
          <span>Email</span>
          <input
            className="form-control"
            name="email"
            onChange={this.handleOnChange}
          />
        </div>
        <div className="form-group">
          <span>Số điện thoại</span>
          <input
            className="form-control"
            name="soDt"
            onChange={this.handleOnChange}
          />
        </div>
        <div className="form-group">
          <span>Mã nhóm</span>
          <input
            className="form-control"
            name="maNhom"
            onChange={this.handleOnChange}
          />
        </div>
        <div className="form-group">
          <span>Mã loại người dùng</span>
          <input
            className="form-control"
            name="maLoaiNguoiDung"
            onChange={this.handleOnChange}
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-success">
            Thêm người dùng
          </button>
        </div>
      </form>
    );
  }
}

//Giup component fire the action of getting login from store. Goi props nay trong componentDidMount
//Bam nut LOG IN => fire dispatch
const mapDispatchToProps = (dispatch) => {
  return {
    addUserAPI: (user) => {
      //goi props nay o ham cua button ADD USER
      dispatch(addUserAPI(user));
    },
  };
};

//Sau khi BAM NUT LOG IN => upstate state => lay du lieu state ve
const mapStateToProps = (state) => {
  return {
    loading: state.userReducer.loading,
    err: state.userReducer.err,
  };
};

//Goi ham mapDispatchToProps
export default connect(mapStateToProps, mapDispatchToProps)(UserPage);

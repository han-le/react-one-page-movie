import React, { Component } from "react";
import { connect } from "react-redux";
import { actLogInAPI } from "./modules/actions";
import Loader from "./../../../components/Loader";

class AuthPage extends Component {
  constructor(props) {
    super(props);
    //Tao mot state de store thong tin user nhap vap
    this.state = {
      taiKhoan: "",
      matKhau: "",
    };
  }

  handleOnChange = (event) => {
    // let name = event.target.name;
    // let value = event.target.value;
    const { name, value } = event.target;
    console.log(name);
    console.log(value);
    //Gui len state
    this.setState({
      [name]: value,
    });
  };

  handleLogin = (event) => {
    event.preventDefault();
    console.log("Print state -----");

    console.log(this.state);
    this.props.loginAPI(this.state, this.props.history);
    console.log(this.props);
  };

  //Thong bao nhap sai
  renderNoti = () => {
    const { error } = this.props;
    if (error) {
      return <div className="alert alert-danger">{error.response.data}</div>;
    }
  };

  render() {
    //Loading
    const { loading } = this.props;
    if (loading) return <Loader />;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <h1>Log In</h1>
            <form onSubmit={this.handleLogin}>
              {this.renderNoti()}
              <div className="form-group">
                <label>Username</label>
                <input
                  type="text"
                  className="form-control"
                  name="taiKhoan"
                  onChange={this.handleOnChange}
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="text"
                  className="form-control"
                  name="matKhau"
                  onChange={this.handleOnChange}
                />
              </div>
              <button type="submit" class="btn btn-primary btn-lg">
                Log In
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  // componentDidMount() {
  //   this.props.loginAPI(); => WRONG
  // }
}

//Giup component fire the action of getting login from store. Goi props nay trong componentDidMount
//Bam nut LOG IN => fire dispatch
const mapDispatchToProps = (dispatch) => {
  return {
    loginAPI: (user, history) => {
      dispatch(actLogInAPI(user, history));
    },
  };
};

//Sau khi BAM NUT LOG IN => upstate state => lay du lieu state ve
const mapStateToProps = (state) => {
  return {
    loading: state.authReducer.loading,
    err: state.authReducer.err,
  };
};

//Goi hamf mapDispatchToProps
export default connect(mapStateToProps, mapDispatchToProps)(AuthPage);

import React, { Component } from "react";

export default class NhanVien extends Component {
  render() {
    return (
      <div>
        <h5>Form Nhan Vien</h5>
        <div>
          <div className="form-group">
            <label>Ma Nhan Vien</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label>Ten Nhan Vien</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="text" className="form-control" />
          </div>
        </div>
      </div>
    );
  }
}

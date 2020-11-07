import React, { Component } from "react";

export default class SanPham extends Component {
  render() {
    return (
      <div>
        <h5>Form San Pham</h5>
        <div>
          <div className="form-group">
            <label>Ma San Pham</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label>Ten San Pham</label>
            <input type="text" className="form-control" />
          </div>
        </div>
      </div>
    );
  }
}

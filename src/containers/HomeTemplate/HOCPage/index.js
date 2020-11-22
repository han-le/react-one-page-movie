import React, { Component } from "react";
import NhanVien from "./NhanVien";
import SanPham from "./SanPham";
import WithModal from "./WithModal";

const ModalForm = WithModal(NhanVien);

export default class HocPage extends Component {
  state = {};

  render() {
    return (
      <div className="container">
        <h3>HOC</h3>
        {/* <NhanVien /> */}
        {/* <SanPham /> */}

        <ModalForm />
        <hr></hr>
        {/* <h3>Number: {this.state.number}</h3> */}
        <button>Add</button>
      </div>
    );
  }
}

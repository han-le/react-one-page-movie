import React, { Component } from "react";
import NhanVien from "./NhanVien";
import SanPham from "./SanPham";
import WithModal from "./WithModal";

const ModalForm = WithModal(NhanVien);

export default class HocPage extends Component {
  render() {
    return (
      <div className="container">
        <h3>HOC</h3>
        {/* <NhanVien /> */}
        {/* <SanPham /> */}

        <ModalForm />
      </div>
    );
  }
}

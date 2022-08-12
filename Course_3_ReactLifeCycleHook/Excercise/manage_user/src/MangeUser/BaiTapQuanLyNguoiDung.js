import React, { Component } from "react";
import FormDangKy from './component/FormDangKy';
import TableDanhSachNguoiDung from './component/TableDanhSachNguoiDung';

import './style.scss'

export default class BaiTapQuanLyNguoiDung extends Component {

  render() {
    return (
      <div className="main">
        <FormDangKy/>
        <TableDanhSachNguoiDung/>
      </div>
    )
  }
}

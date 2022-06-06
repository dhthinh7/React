import React, { Component } from "react";
import { connect } from "react-redux";

class ThongTinGame extends Component {
  
  render() {
    let {taiXiu, soBanThang, tongSoBanChoi} = this.props;
    return <div style={{fontSize: "2rem"}}>
      <div>BẠN CHỌN: <span style={{color: "red"}}>{taiXiu === true ? "TÀI":"XỈU"}</span></div>
      <div>BÀN THẮNG: {soBanThang}</div>
      <div>TỔNG SỐ BÀN CHƠI: {tongSoBanChoi}</div>
    </div>
  }
}

const mapStateToProps = state => {
  return {
    taiXiu: state.BaiTapGameXucXacReducer.taiXiu,
    soBanThang: state.BaiTapGameXucXacReducer.soBanThang,
    tongSoBanChoi: state.BaiTapGameXucXacReducer.tongSoBanChoi
  }
}
export default connect(mapStateToProps)(ThongTinGame);


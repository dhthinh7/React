import React, { Component } from "react";
import { connect } from "react-redux";
import './TableDanhSachNguoiDung.scss';
import { editUser } from "../../redux/actions/action";

class TableDanhSachNguoiDung extends Component {

  handleClicked = (e, userEdit) => {
    let userNull = { account: "", password: "", email: "", name: "", phoneNumber: "", userType: "Khách hàng" };
    
    // Change background color when tr is clicked
    const div = document.getElementById(e.currentTarget.id);
    const divClassList = document.getElementsByClassName("handleChange");

    // Remove all class handleChange when clicked or 1 item is clicked 2 times
    if (divClassList != null && divClassList.length > 0 && !div.classList.value.includes("handleChange")) {
      divClassList[0].classList.remove("handleChange");
    }

    // Remove class follow condition and update userEdit to register form
    if (div !== null){
      if (div.classList.value.includes("handleChange")) {
        div.classList.remove("handleChange");
        this.props.dispatch(editUser(userNull));
      } else {
        div.classList.add("handleChange");
        this.props.dispatch(editUser(userEdit));
      }
    }
  }

  // Render Head of User List
  renderUserInforHead = () => {
    return (
      <tr>
        <th>STT</th>
        <th>Tài khoản</th>
        <th>Họ Tên</th>
        <th>Mật Khẩu</th>
        <th>Email</th>
        <th>Số điện thoại</th>
        <th>Loại người dùng</th>
      </tr>
    )
  }

  // Covert password to ***
  hidePassWord = (password) => {
    let hidedPassWord = '';
    for (let i = 0; i < password.toString().length; i++) {
      hidedPassWord += "*";
    }
    return hidedPassWord
  }

  // Render body of User List
  renderUserInforBody = () => {
    return this.props.listUser.map((item, index) => {
      return <tr key={index} id={"tr" + index} onClick={(e) => this.handleClicked(e, item)}>
        <td>{index + 1}</td>
        <td>{item.account}</td>
        <td>{item.name}</td>
        <td>{this.hidePassWord(item.password)}</td>
        <td>{item.email}</td>
        <td>{item.phoneNumber}</td>
        <td>{item.userType}</td>
      </tr>
    });
  }

  render() {
    return <div className="listUser">
      <div className="formHeader">Danh sách người dùng</div>
      <div className="listUserTable">
        <table className="userTable">
          <thead>{this.renderUserInforHead()}</thead>
          <tbody>{this.renderUserInforBody()}</tbody>
        </table>
      </div>
    </div>;
  }
}
const mapStateToProps = (state) => {
  return {
    listUser: state.userList,
    userEdit: state.userEdit
  }
}
export default connect(mapStateToProps)(TableDanhSachNguoiDung);
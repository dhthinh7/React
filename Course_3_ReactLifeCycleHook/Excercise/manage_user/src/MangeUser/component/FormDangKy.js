import React, { Component } from "react";
import './FormDangKy.scss';
import { addUser, updateUser } from "../../redux/actions/action";
import { connect } from "react-redux";

class FormDangKy extends Component {

  // Define local state for this component
  state = {
    user: { account: "", password: "", email: "", name: "", phoneNumber: "", userType: "Khách hàng" },
    errorInput: {account: "", password: "", email: "", name: "", phoneNumber: ""}
  }

  // Action when Register button is clicked
  registerAction = () => {
    let error = this.state.errorInput;

    // Check error in each errorInput [1]
    let countError =  Object.entries(error).reduce((checkValid, value)=>{
      if (value[1] !== '') checkValid += 1;
      return checkValid;
    }, 0);

    // Check error each user [2]
    let countInvalid = Object.entries(this.state.user).reduce((checkValid, value)=>{
      if (value[1] === ''){
        checkValid += 1;
        error[value[0]] = "This field can not be empty";
      }
      return checkValid;
    }, 0);

    // Check error form [1], [2]
    if ((countError || countInvalid) === 0) {
      let {user} = this.state;
      // Check whether an account exists or not exists in this.props.user List
      if (this.props.userList.findIndex(item => item.account === user.account) === -1) this.props.dispatch(addUser(user));
      else {
        this.setState({
          errorInput: {...this.state.errorInput, account: "Tài khoản đã tồn tại"},
        })
      }
    } else {
      this.setState({
        errorInput: {...error}
      })
    }
  }

  // Action when "Cập nhật" button is clicked. Reset state user to '', and dispatch information of user to redux
  updateAction = () => {
    let {user} = this.state;
    this.setState({
      user: { account: "", password: "", email: "", name: "", phoneNumber: "", userType: "Khách hàng" },
    }, ()=>{this.props.dispatch(updateUser(user))});
    
  }

  // Validation input at "Form đăng ký"
  validation = (id, value) => {
    // Default regrex for email 
    let regrex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (value.trim() === '') {
      return false;
    }

    if (id === "phoneNumber") regrex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    if(!regrex.test(value) && (id === "phoneNumber" || id === "email")) return false;

    return true;
  }

  // Update state from "From đăng ký" and validation each input
  getValueInput = (e) => {
    let {name, id, value} = e.target; 
    let newUser = { ...this.state.user };
    let handleError = {...this.state.errorInput};
    let checkValid = this.validation(id, value);

    if (checkValid) {
      handleError[id] = '';
      newUser[id] = value;
    } else {
      handleError[id] = name + ' is invalid';
      newUser[id] = value;
    }
    
    this.setState({
      user: { ...newUser },
      errorInput: {...handleError}
    })
  }

  // handleAccount = () => {
  //   if (this.props.disabled) return <input disabled type="text" name="Tài khoản" id="account" value={this.state.user.account} onChange={(e) => { this.getValueInput(e) }} />
  //   return <input type="text" name="Tài khoản" id="account" value={this.state.user.account} onChange={(e) => { this.getValueInput(e) }} />
  // }

  render() {
    return <div>
      <div className="formHeader">Form đăng ký</div>
      <form className="formContent" onSubmit={this.handleSubmit}>
        <div className="form-row">
          <div className="form-input">
            <label htmlFor="account" className="required">Tài khoản</label>
            {/* {this.handleAccount()} */}
            <input type="text" name="Tài khoản" id="account" value={this.state.user.account} onChange={(e) => { this.getValueInput(e) }} />
            <span style={{position: "absolute", bottom: 0, left: 0}}>{this.state.errorInput.account}</span>
          </div>
          <div className="form-input">
            <label htmlFor="password" className="required">Mật Khẩu</label>
            <input type="text" name="Mật Khẩu" id="password" value={this.state.user.password} onChange={(e) => { this.getValueInput(e) }}/>
            <span style={{position: "absolute", bottom: 0, left: 0}}>{this.state.errorInput.password}</span>
          </div>
          <div className="form-input">
            <label htmlFor="email" className="required">Email</label>
            <input type="text" name="Email" id="email" value={this.state.user.email} onChange={(e) => { this.getValueInput(e) }}/>
            <span style={{position: "absolute", bottom: 0, left: 0}}>{this.state.errorInput.email}</span>
          </div>
        </div>
        <div className="form-row">
          <div className="form-input">
            <label htmlFor="name" className="required">Họ tên</label>
            <input type="text" name="Họ tên" id="name" value={this.state.user.name} onChange={(e) => { this.getValueInput(e) }}/>
            <span style={{position: "absolute", bottom: 0, left: 0}}>{this.state.errorInput.name}</span>
          </div>
          <div className="form-input">
            <label htmlFor="phoneNumber" className="required">Số điện thoại</label>
            <input type="text" name="Số điện thoại" id="phoneNumber" value={this.state.user.phoneNumber} onChange={(e) => this.getValueInput(e)}/>
            <span style={{position: "absolute", bottom: 0, left: 0}}>{this.state.errorInput.phoneNumber}</span>
          </div>
          <div className="form-input">
            <label htmlFor="userType" className="required">Mã loại người dùng</label>
            <select name="Mã loại người dùng" id="userType" value={this.state.user.userType} onChange={(e)=>this.getValueInput(e)}>
              <option value="Khách hàng">Khách hàng</option>
              <option value="Nhân viên">Nhân viên</option>
            </select>
          </div>
        </div>
      </form>
      <div className="formButton">
        <button className="btn btnRegister" onClick={() => { this.registerAction()}}>Đăng ký</button>
        <button className="btn btnUpdate" onClick={() => { this.updateAction()}}>Cập nhật</button>
      </div>
    </div>;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.userEdit.account !== this.props.userEdit.account) {
      this.setState({
        user: this.props.userEdit
      })
    }
  }
}

const mapStateToProps = (state)=> ({
  userList: state.userList,
  userEdit: state.userEdit,
  disabled: state.disabled
})

export default connect(mapStateToProps)(FormDangKy);
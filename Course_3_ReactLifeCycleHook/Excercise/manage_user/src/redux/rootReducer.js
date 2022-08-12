import { add_User, edit_User, update_User } from "./types/type";

const userState = {
  userList: [
    // {account: "13", password: "", email: "", name: "", phoneNumber: "", userType: ""}
  ],
  userEdit: {},
  disabled : false
}

const ManageUserState = (state = userState, action) => {
  switch (action.type) {
    case add_User:
      let userAdd = [...state.userList];
      userAdd.push(action.user);
      state.userList = userAdd;
      return { ...state }
    case edit_User:
      
      if (action.userEdit.account === '') return { ...state, userEdit: action.userEdit, disabled : false };
      return { ...state, userEdit: action.userEdit, disabled : true };

    case update_User:
      state.userEdit = {...state, userEdit: action.userUpdate};
      let userUpdated = [...state.userList];
      let index = userUpdated.findIndex((item => item.account === action.userUpdate.account));

      if (index !== -1) userUpdated[index] = {...action.userUpdate};

      state.userList = userUpdated;
      return {...state, disabled: false};

    default:
      break;
  }
  return { ...state };
}

export default ManageUserState;

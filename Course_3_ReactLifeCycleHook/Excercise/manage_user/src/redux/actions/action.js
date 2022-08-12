import { add_User, edit_User, update_User } from "../types/type";

export const addUser = (user) => ({
  type: add_User,
  user
})

export const editUser = (userEdit) => ({
  type: edit_User,
  userEdit
})

export const updateUser = (userUpdate) => ({
  type: update_User,
  userUpdate
})
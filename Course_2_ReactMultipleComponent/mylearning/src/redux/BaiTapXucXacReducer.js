// Khoi tạo sate ban đầu
const stateDefault = {
  taiXiu: true, //True > 11, False <= 11
  mangXucXac: [
    {ma: 1, hinhAnh:'./img/gameXucXac/1.png'},
    {ma: 1, hinhAnh:'./img/gameXucXac/1.png'},
    {ma: 1, hinhAnh:'./img/gameXucXac/1.png'}
  ],
  soBanThang: 0,
  tongSoBanChoi: 0
}

// Create reducer
const BaiTapGameXucXacReducer = (state = stateDefault, action)=>{
  switch(action.type){
    default: return {...state};
  }
}

export default BaiTapGameXucXacReducer;
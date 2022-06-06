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
  const XulyThangGame = (sum)=>{
    if ((sum > 11 && state.taiXiu === true) || (sum <=11 && state.taiXiu === false)) state.soBanThang += 1;
  }
  
  switch(action.type){
    case 'DAC_CUOC':
      state.taiXiu = action.taiXiu;
      return {...state};
    case 'PLAY_GAME':
      let mangRandomXucXac = [];
      let sum = 0
      for (let i = 0; i < 3; i++){
        let randomNumber = Math.floor(Math.random() * 6) + 1;
        let xucXac = {ma: randomNumber, hinhAnh:`./img/gameXucXac/${randomNumber}.png`};
        mangRandomXucXac.push(xucXac);
        sum += randomNumber;
      }
      XulyThangGame(sum);
      state.mangXucXac = mangRandomXucXac;
      state.tongSoBanChoi += 1;
      return {...state};
    default: return {...state};
  }
}

export default BaiTapGameXucXacReducer;
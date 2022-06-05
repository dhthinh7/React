import {combineReducers} from 'redux';
import BaiTapGameXucXacReducer from './BaiTapXucXacReducer';

const rootReducer = combineReducers({
  // BaiTapGameXucXacReducer:BaiTapGameXucXacReducer
  BaiTapGameXucXacReducer // Nếu tên biến bằng giá trị có thể ghi ngắn gọn tên biến
})

export default rootReducer;
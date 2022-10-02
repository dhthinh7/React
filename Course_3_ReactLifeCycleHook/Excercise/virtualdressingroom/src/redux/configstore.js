import {combineReducers, createStore} from 'redux';
import { DataJsonReducer } from './reducers/DataJsonReducer';

const rootReducers = combineReducers({
  DataJsonReducer
})

export const store = createStore(rootReducers);
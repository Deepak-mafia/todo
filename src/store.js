import { configureStore, combineReducers } from '@reduxjs/toolkit';
import todoSlice from './counterSlice';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  version: 1,
  storage
}
const reducer = combineReducers({
  todo: todoSlice,
})

const persisitedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
  reducer: persisitedReducer
});

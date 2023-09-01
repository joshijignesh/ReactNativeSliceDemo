import {combineReducers, configureStore} from '@reduxjs/toolkit';
import usersSlice from '../redux/slice/userSlice';
import authSlice from '../redux/slice/authSlice';

/**
 * All reducers will be added here 
 */
const reducers = combineReducers({
  auth: authSlice,
  users: usersSlice
})

/**
 * Main reducer.
 */
const rootReducer = (state: any, action: any) => {
  return reducers(state, action)
}

//Store which have all state.
const store = configureStore({
  reducer: rootReducer
});

export default store;

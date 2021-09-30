import { configureStore } from '@reduxjs/toolkit';
import authReducer from "./authReducer";

// export default combineReducers({
//     authReduce: authReducer
// });


export const store = configureStore({
  reducer: {
    authReduce: authReducer,
  },
});
import { configureStore } from '@reduxjs/toolkit';

import authSlice from "./authSlice";
import resumeDataSlice from "./resumeDataSlice";

// export default combineReducers({
//     authReducer: authReducer
// });


export const store = configureStore({
  reducer: {
    authReducer: authSlice,
    resumeDataReducer: resumeDataSlice
  },
});

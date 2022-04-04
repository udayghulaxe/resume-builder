import { configureStore } from '@reduxjs/toolkit';

import authSlice from "./authSlice";
import resumeDataSlice from "./resumeDataSlice";
import resumeSettingsSlice from "./resumeSettingsSlice";

// export default combineReducers({
//     authReducer: authReducer
// });


export const store = configureStore({
  reducer: {
    authReducer: authSlice,
    resumeDataReducer: resumeDataSlice,
    resumeSettingsReducer: resumeSettingsSlice
  },
});

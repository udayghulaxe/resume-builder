import { configureStore } from '@reduxjs/toolkit'

import authSlice from './authSlice'
import userDataSlice from './userDataSlice'
import resumeDataSlice from './resumeDataSlice'
import resumeSettingsSlice from './resumeSettingsSlice'

// export default combineReducers({
//     authReducer: authReducer
// });

export const store = configureStore({
    reducer: {
        authReducer: authSlice,
        userDataReducer: userDataSlice,
        resumeDataReducer: resumeDataSlice,
        resumeSettingsReducer: resumeSettingsSlice,
    },
})

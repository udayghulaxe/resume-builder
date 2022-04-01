import {createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import firebase from '../firebase';

const INITIAL_STATE = {
    globalSettings: {
        bodyFontSize: 'small',
        headingFontSize: 'large',
        subheadingFontSize: 'medium',
        bodyFontColor: '#000000',
        headingFontColor: '#000000',
        subheadingFontColor: '#000000',
        headerBackgroundColor: '#ffffff',
        sidebarBackgroundColor: '#ffffff',
        aboutSectionFontColor: '#000000',
        headingAlignment: 'left',
    }
};



// First, create the thunk
export const getGlobalSettingsByUserId = createAsyncThunk(
  'resume/getGlobalSettingsByUserId',
  async (userId, thunkAPI) => {
    const response = await (await firebase.firestore().collection('users').doc(userId).get()).data();
    return JSON.parse(response.globalSettings);
  }
)

// First, create the thunk
export const updateGlobalSettingsUserId = createAsyncThunk(
  'resume/updateGlobalSettingsUserId',
  async (apiData, thunkAPI) => {
    await (await firebase.firestore().collection("users").doc(apiData.userId).update({globalSettings: JSON.stringify(apiData.data)}));
    return apiData.data;
  }
)
  

export const globalSettingsSlice = createSlice({
    name: 'globalSettingsSlice',
    initialState: INITIAL_STATE,
    reducers: {
        updateSettingsDataReducer: (state, action) => {
            const data = JSON.parse(JSON.stringify(state.globalSettings));
            //data[action.payload.column].filter(item => item.name === action.payload.name)[0].componentData = action.payload.data;
            state.resumeData = data;
        },
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(getGlobalSettingsByUserId.fulfilled, (state, action) => {
            state.globalSettings = action.payload;
        })

        .addCase(updateGlobalSettingsUserId.fulfilled, (state, action) => {
          state.globalSettings = action.payload;
      })
    },
  });

export const { updateSettingsDataReducer } = globalSettingsSlice.actions;  

export default globalSettingsSlice.reducer;
import {createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import firebase from '../firebase';

const INITIAL_STATE = {
    resumeData: null, loading: 'idle'
};



// First, create the thunk
export const getResumeDataByUserId = createAsyncThunk(
  'resume/getResumeDataByUserId',
  async (userId, thunkAPI) => {
    const response = await (await firebase.firestore().collection('userResume').doc(userId).get()).data();
    return JSON.parse(response.resumeJson);
  }
)

// First, create the thunk
export const updateResumeDataByUserId = createAsyncThunk(
  'resume/updateResumeDataByUserId',
  async (apiData, thunkAPI) => {
    await (await firebase.firestore().collection("userResume").doc(apiData.userId).set({resumeJson: JSON.stringify(apiData.data)}));
    return apiData.data;
  }
)
  

export const resumeDataSlice = createSlice({
    name: 'resumeDataSlice',
    initialState: INITIAL_STATE,
    reducers: {
        updateResumeDataReducer: (state, action) => {
            const a = null;
            const data = {...a, resumedata: state.resumeData};
            data.resumedata[action.payload.column].filter(item => item.name === action.payload.name)[0].componentData = action.payload.data;
            // state.resumeData = data.resumedata;
        },
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(getResumeDataByUserId.fulfilled, (state, action) => {
            state.resumeData = action.payload;
        })

        .addCase(updateResumeDataByUserId.fulfilled, (state, action) => {
          state.resumeData = action.payload;
      })
    },
  });

export const { updateResumeDataReducer } = resumeDataSlice.actions;  

export default resumeDataSlice.reducer;
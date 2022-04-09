import {createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import firebase from '../firebase';
import { initialData } from "../globals";


const INITIAL_STATE = {
    userData: null,
};



// First, create the thunk
export const getUserDataByUserId = createAsyncThunk(
  'resume/getUserDataByUserId',
  async (userId, thunkAPI) => {
      
    const response = await (await firebase.firestore().collection('users').doc(userId).get()).data();
    return response;
  }
)

// First, create the thunk
export const updateUserResumeDataByUserId = createAsyncThunk(
  'resume/updateUserDataByUserId',
  async (apiData, thunkAPI) => {
      
    await firebase.firestore()
    .collection("users")
    .doc(`${apiData.userId}`)
    .update({
      userResumes: apiData.data,
    });
    return apiData.data;
  }
)

// First, create the thunk
export const deleteResumeByResumeId = createAsyncThunk(
  'resume/deleteResumeByResumeId',
  async (resumeId, thunkAPI) => {
      
    firebase.firestore()
      .collection("resumes")
      .doc(`${resumeId}`)
      .delete();
  }
)

export const copyResumeByResumeId = createAsyncThunk(
  'resume/copyResumeByResumeId',
  async (apiData, thunkAPI) => {

    const response = await (await firebase.firestore().collection('resumes').doc(apiData.resumeId).get()).data();
    await firebase.firestore()
      .collection("resumes")
      .doc(`${apiData.uniqueId}`)
      .set({
        resumeJson: response.resumeJson,
        resumeSettings: response.resumeSettings
    });

    return JSON.parse(response.resumeJson);
  }
)

// create the thunk
export const createNewReumseByUserId = createAsyncThunk(
  'resume/createNewReumseByUserId',
  async (apiData, thunkAPI) => {
    console.log(apiData);
    const userResumeData = [
      {
        resumeName: `Resume ${apiData.data.length + 1}`,
        resumeId: `${apiData.uniqueId}`,
        resumeImage: ""
      }
    ];

    const newResumesArr = [...apiData.data, ...userResumeData];

    initialData.resumeJson.header.filter(
      (item) => item.name === "BasicInfo"
    )[0].componentData = {
      fullName: apiData.userData.name,
      email: apiData.userData.email,
      website: "www.example.com",
      phone: "1234567890",
      address: "123, ABC Street, XYZ City, ABC State, 123456",
    };
    await firebase.firestore()
      .collection("resumes")
      .doc(`${apiData.uniqueId}`)
      .set({
        resumeJson: JSON.stringify(initialData.resumeJson),
        resumeSettings: JSON.stringify(initialData.resumeSettings)
    });
    await (await firebase.firestore().collection("users").doc(apiData.userData.userId).update({userResumes: JSON.stringify(newResumesArr)}));
    return newResumesArr; 
  }
)
  

export const userDataSlice = createSlice({
    name: 'userDataSlice',
    initialState: INITIAL_STATE,
    reducers: {
        updateUserDataReducer: (state, action) => {
            const data = JSON.parse(JSON.stringify(state.userData));
            state.userData = data;
        },
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(getUserDataByUserId.fulfilled, (state, action) => {
            state.userData = action.payload;
        });

        builder.addCase(createNewReumseByUserId.fulfilled, (state, action) => {
          state.userData.userResumes = action.payload;
        });

        builder.addCase(updateUserResumeDataByUserId.fulfilled, (state, action) => {
          state.userData.userResumes = action.payload;
        });
    },
  });

export const { updateUserDataReducer } = userDataSlice.actions;  

export default userDataSlice.reducer;
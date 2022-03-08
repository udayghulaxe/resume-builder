import {createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
    isSignedIn : (localStorage.getItem('token') == null) ? false : true
};

export const authSlice = createSlice({
    name: 'auth',
    initialState: INITIAL_STATE,
    reducers: {
        signInAction: (state, action) => {
            state.isSignedIn = true;
        },
        signOutAction: (state) => {
            state.isSignedIn = false;
        },
    },
  });
  
  export const { signInAction, signOutAction } = authSlice.actions;

export default authSlice.reducer;
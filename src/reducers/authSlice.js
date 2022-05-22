import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
    isSignedIn: localStorage.getItem('token') == null ? false : true,
    userId: null,
    name: null,
    email: null,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState: INITIAL_STATE,
    reducers: {
        signInAction: (state, action) => {
            state.isSignedIn = true;
            state.userId = action.payload.userId;
            state.name = action.payload.name;
            state.email = action.payload.email;
        },
        signOutAction: state => {
            state.isSignedIn = false;
            state.userId = null;
            state.name = null;
            state.email = null;
        },
    },
});

export const { signInAction, signOutAction } = authSlice.actions;

export default authSlice.reducer;

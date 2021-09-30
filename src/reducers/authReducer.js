import {createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
    isSignedIn : null
};

// const authReducer = (state = INITIAL_STATE, action) => {
//     switch (action.type) {
//         case 'SIGN_IN_ACTION':
//             return {...state, isSignedIn: true};
//         case 'SIGN_OUT_ACTION':
//             return {...state, isSignedIn: false};  
//         default:
//             return state;
//     }
// }

export const authSlice = createSlice({
    name: 'auth',
    initialState: INITIAL_STATE,
    reducers: {
        signInAction: (state) => {
            console.log('coming here singIN');
            state.isSignedIn = true;
        },
        signOutAction: (state) => {
            console.log('coming here singOut');
            state.isSignedIn = false;
        },
    },
  });
  
  export const { signInAction, signOutAction } = authSlice.actions;

export default authSlice.reducer;
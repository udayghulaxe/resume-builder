import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import firebase from '../firebase'

const INITIAL_STATE = {
    resumeSettings: null,
}

// First, create the thunk
export const getResumeSettingsByResumeId = createAsyncThunk(
    'resume/getResumeSettingsByResumeId',
    async (resumeId, thunkAPI) => {
        const response = await (await firebase.firestore().collection('resumes').doc(`${resumeId}`).get()).data()
        return JSON.parse(response.resumeSettings)
    }
)

// First, create the thunk
export const updateResumeSettingsByResumeId = createAsyncThunk(
    'resume/updateResumeSettingsByResumeId',
    async (apiData, thunkAPI) => {
        await await firebase
            .firestore()
            .collection('resumes')
            .doc(`${apiData.resumeId}`)
            .update({ resumeSettings: JSON.stringify(apiData.data) })
        return apiData.data
    }
)

export const resumeSettingsSlice = createSlice({
    name: 'resumeSettingsSlice',
    initialState: INITIAL_STATE,
    reducers: {
        updateSettingsDataReducer: (state, action) => {
            const data = JSON.parse(JSON.stringify(action.payload))
            state.resumeSettings = data
        },
    },
    extraReducers: builder => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(getResumeSettingsByResumeId.fulfilled, (state, action) => {
            state.resumeSettings = action.payload
        })

        builder.addCase(updateResumeSettingsByResumeId.fulfilled, (state, action) => {
            state.resumeSettings = action.payload
        })
    },
})

export const { updateSettingsDataReducer } = resumeSettingsSlice.actions

export default resumeSettingsSlice.reducer

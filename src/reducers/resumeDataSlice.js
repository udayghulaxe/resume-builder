import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import firebase from '../firebase'

const INITIAL_STATE = {
    resumeData: null,
    loading: 'idle',
    openEditorName: null,
}

export const getResumeDataByResumeId = createAsyncThunk(
    'resume/getResumeDataByResumeId',
    async (resumeId, thunkAPI) => {
        console.log('calling api')
        const response = await (await firebase.firestore().collection('resumes').doc(`${resumeId}`).get()).data()
        return JSON.parse(response.resumeJson)
    }
)

// First, create the thunk
export const updateResumeDataByResumeId = createAsyncThunk(
    'resume/updateResumeDataByResumeId',
    async (apiData, thunkAPI) => {
        await await firebase
            .firestore()
            .collection('resumes')
            .doc(`${apiData.resumeId}`)
            .update({ resumeJson: JSON.stringify(apiData.data) })
        return apiData.data
    }
)

export const resumeDataSlice = createSlice({
    name: 'resumeDataSlice',
    initialState: INITIAL_STATE,
    reducers: {
        updateResumeDataReducer: (state, action) => {
            const data = JSON.parse(JSON.stringify(state.resumeData))
            data[action.payload.column].filter(item => item.name === action.payload.name)[0].componentData =
                action.payload.data
            state.resumeData = data
        },

        updateOpenEditorName: (state, action) => {
            console.log('calling updateOpenEditorName', action.payload)
            state.openEditorName = action.payload
        },
    },
    extraReducers: builder => {
        builder.addCase(getResumeDataByResumeId.fulfilled, (state, action) => {
            console.log(action)
            state.resumeData = action.payload
        })

        builder.addCase(updateResumeDataByResumeId.fulfilled, (state, action) => {
            state.resumeData = action.payload
        })
    },
})

export const { updateResumeDataReducer, updateOpenEditorName } = resumeDataSlice.actions

export default resumeDataSlice.reducer

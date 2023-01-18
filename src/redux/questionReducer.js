import { createSlice } from "@reduxjs/toolkit"


export const questionReducer = createSlice({
    name: 'questions',
    initialState: {
        queue: [],
        answers: [],
        trace: 0
    },

    reducers: {
        startExamAction: (state, action) => {
            return {
                ...state,
                queue: action.payload
            }
        },
        moveNextAction: (state, action) => {
            let randomNum = Math.floor(Math.random() * 9) + 1;
            return {
                ...state,
                trace: state.trace + randomNum
            }
        }
    }
})


export const { startExamAction, moveNextAction } = questionReducer.actions;

export default questionReducer.reducer;
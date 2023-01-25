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
          let {questions, answers} = action.payload
            return {
                ...state,
                queue: questions,
                answers: answers
            }
        },
        moveNextAction: (state, action) => {
            let randomNum = Math.floor(Math.random() * 8) + 1;
            return {
                ...state,
                trace: state.trace + 1
            }
        },
        movePrevAction: (state, action) => {
            return {
                ...state,
                trace : state.trace - 1
            }
        },

        resetAllAction: () => {
            return {
                queue: [],
                answers: [],
                trace: 0
            }
        }
    }
})


export const { startExamAction, moveNextAction, movePrevAction, resetAllAction } = questionReducer.actions;

export default questionReducer.reducer;
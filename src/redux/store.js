import { configureStore, combineReducers } from "@reduxjs/toolkit";
import  questionReducer  from "./questionReducer";
import  resultReducer  from "./resultReducer";

const rootReducer = combineReducers({
    questions: questionReducer,
    result: resultReducer
    

})

export default configureStore({reducer: rootReducer})
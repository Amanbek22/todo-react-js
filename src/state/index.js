import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { todoSliceReducer } from "./todoSlice";

const reducers = combineReducers({
    todos: todoSliceReducer 
})

export const store = configureStore({
    reducer: reducers
})
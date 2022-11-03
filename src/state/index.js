import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { todoSliceReducer } from "./todoSlice";

const reducers = combineReducers({
    todos: todoSliceReducer 
})

export const store = configureStore({
    reducer: reducers
})

store.subscribe(() => {
    const state = store.getState();
    const todos = state.todos.data;
    localStorage.setItem("todo", JSON.stringify(todos))
});
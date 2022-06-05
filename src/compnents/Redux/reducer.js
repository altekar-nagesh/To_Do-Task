import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const addTodoReducer = createSlice({
    name:"todo",
    initialState,
    reducers:{
    addTodo:(state,action) => {
        state.push(action.payload);
        return state;
        },
    removeTodo:(state, action) => {
        return state.filter(item => item.id !== action.payload)
    },
    updateTodo:(state, action) => {
        return state.map(todo => {
            if (todo.id === action.payload.id){
                return {
                    ...todo,
                    item:action.payload.item,
                }
            }
            return todo;
        })
    },
    completeTodo:(state, action) => {
        return state.map(todo => {
            if (todo.id === action.payload){
                return {
                    ...todo,
                    completed:true
                }
            }
            return todo;
        })
    }
    }
})

export const {addTodo, removeTodo, updateTodo, completeTodo} =addTodoReducer.actions;
export const reducer =addTodoReducer.reducer;
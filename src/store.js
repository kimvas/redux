
import { configureStore, createSlice } from "@reduxjs/toolkit"


// const addTodo = createAction("ADD");
// const deleteToDo = createAction("DELETE")

// // const reducer = (state = [], action) => {
// //     switch(action.type) {
// //         case addTodo.type :
// //             return [{text : action.payload, id : Date.now()}, ...state];
// //         case deleteToDo.type :
// //             return state.filter(toDo => toDo.id !== action.payload);
// //         default :
// //             return state;
// //     }
// // }

// const reducer = createReducer([],{
//     [addTodo] : (state , action) => {
//         state.push({text : action.payload, id : Date.now()})
//     },
//     [deleteToDo] : (state, action) => 
//         state.filter(toDo => toDo.id !== action.payload)
    
// })

const toDos = createSlice({
    name :'toDosReducer',
    initialState : [],
    reducers : {
        add : (state , action) => {
                state.push({text : action.payload, id : Date.now()})
            },
        remove : (state, action) =>
                state.filter(toDo => toDo.id !== action.payload)
        }
});

const store = configureStore({reducer :toDos.reducer});

export const { add, remove } = toDos.actions;

export default store;
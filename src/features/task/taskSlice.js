import {createSlice} from '@reduxjs/toolkit'

const firstState = [
    {
        id: '1',
        title: "Task 1",
        description: "Task 1 description",
        completed: false,
    },
    {
        id: "2",
        title: "Task 2",
        description: "Task 2 description",
        completed: false,
    }
]

export const taskSlice = createSlice({
    name: 'tasks',
    initialState: firstState,
    reducers: {
        addTask: (state,action) => {
            console.log(state, action)
            state.push(action.payload)
            //[...state, action.payload] de esta forma de aplicaria con el operador spread
        },
        deleteTask: (state,action) =>{
            state = state.filter(element => element.id === action.payload)
        }
    },
})

export const {addTask, deleteTask} = taskSlice.actions

export default taskSlice.reducer
import {configureStore} from '@reduxjs/toolkit'
import tasksReducer from '../features/task/taskSlice'

// almacenamiento vacio global
export const store = configureStore({
    reducer: {
        tasks: tasksReducer
    },
})


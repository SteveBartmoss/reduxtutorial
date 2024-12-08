import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTask } from "../features/task/taskSlice"
import { v4 as uuid } from "uuid"

export function TaskForm(){

    const [task,setTask] = useState({
        title:'',
        description:''
    })

    const dispach = useDispatch()

    const handleChange = (event)=>{
        //console.log(event.target.mane, e.target.value)
        setTask({
            ...task,
            [event.target.name]: event.target.value,
        })
    }

    const handleSubmit = (event)=>{
        event.preventDefault()
        console.log(task)
        dispach(addTask({
            ...task,
            id: uuid(),  //3, //cambiar por uuid cuando se instale uuid
        }))
    }

    return(
        <form onSubmit={handleSubmit}>

            <input name="title" type="text" placeholder="title" onChange={handleChange} />

            <textarea name="description" placeholder="description" onChange={handleChange} ></textarea>

            <button>Save</button>
        </form>
    )
}
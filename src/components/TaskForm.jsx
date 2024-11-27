import { useState } from "react"


export function TaskForm(){

    const [task,setTask] = useState({
        title:'',
        description:''
    })

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
    }

    return(
        <form onSubmit={handleSubmit}>
            
            <input name="title" type="text" placeholder="title" onChange={handleChange} />

            <textarea name="description" placeholder="description" onChange={handleChange} ></textarea>

            <button>Save</button>
        </form>
    )
}
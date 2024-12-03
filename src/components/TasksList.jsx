import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { deleteTask } from "../features/task/taskSlice"

export function TasksList(){

    const listTasks = useSelector(state => state.tasks)

    const dispatch = useDispatch()

    const handleDelete=(id)=>{
        console.log(id)
        dispatch(deleteTask(id))    
    }

    return(
        <div>
            <h1>List tasks</h1>
            {
                listTasks.map(task => (
                    <div key={task.id}>
                        <h3>{task.title}</h3>
                        <p>{task.description}</p>
                        <span>{task.completed}</span>
                        <button onClick={ ()=> handleDelete(task.id)}>Delete</button>
                    </div>
                ))
            }
        </div>
        
    )
}
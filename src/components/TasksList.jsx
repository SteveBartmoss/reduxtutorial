import { useSelector } from "react-redux"

export function TasksList(){

    const listTasks = useSelector(state => state.tasks)

    return(
        <div>
            <h1>List tasks</h1>
            {
                listTasks.map(task => (
                    <div key={task.title}>
                        <h3>{task.title}</h3>
                        <p>{task.description}</p>
                        <span>{task.completed}</span>
                    </div>
                ))
            }
        </div>
        
    )
}
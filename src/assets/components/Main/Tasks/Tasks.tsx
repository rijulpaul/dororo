import './Tasks.css'
import editSvg from '../../../../../public/edit.svg'
import { useReducer, useState } from 'react';

function Task({title}) {

    const [isEditing,setIsEditing] = useState<boolean>(false);
    return (
    <div className='task' onClick={()=>setIsEditing(true)}>
            {
                isEditing ?
                (<>
                    <input className="task-input" placeholder={title}/>

                </>) :
                (
                <>
                    {title}
                </>
                )
            }
        </div>
    )
}

function taskReducer(state,action) {
}

function Tasks() {
    const [viewBoard,setViewBoard] = useState<boolean>(false)
    const [activeTask,setActiveTask] = useState<number>(0)
    const [taskList,editTaskList] = useReducer<Array<string>>(taskReducer,["aa","b"])

    return (
        <div className={'tasks-container ' + (viewBoard && 'visible')} onClick={()=>setViewBoard(true)}>
            {
                viewBoard ?
                (
                    <>
                    {taskList && taskList.map((_,index)=><Task title={taskList[index]}/>)}
                    <button className='task-back' onClick={()=>setViewBoard(false)}>x</button>
                    </>
                ) :
                (
                    activeTask ? <Task title={taskList[activeTask]}/> : <Task title="No Task" />
                )
            }
        </div>
    )
}

export default Tasks

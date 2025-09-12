import './Tasks.css'
import { useReducer, useState } from 'react';

function Task ({title,index,taskEditor, setActive}:{title: string; index: number; taskEditor: any, setActive: any}) {
    const [hover,setHover] = useState(false);
    // add warning for empty input
    return (
    <li className={'task ' + (hover && "task-hover")} key={index} onClick={()=>setActive(index)} onMouseOver={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
         <input className="task-input" value={title} placeholder={title} onChange={(e) => taskEditor({type: "edit", value: e.target.value, index})}/>
        { hover && <button className='task-button' onClick={()=>taskEditor({type: "delete", index})}><img className="task-delete" src='./trash.svg'/></button> }
    </li>
    )
}

type taskEditAction = { type: "insert"; value: string } | { type: "delete"; index:number } | { type: "edit"; index: number; value: string};

function taskReducer(state: string[], action: taskEditAction): string[] {
    switch(action.type) {
        case "insert":
            return [...state, action.value]
        case "delete":
            return state.filter((_,i) =>i !== action.index)
        case "edit":
            return state.map((task, index) => index === action.index ? action.value : task)
        default:
            throw new Error()
    }
}

function Tasks() {
    const [viewBoard,setViewBoard] = useState(false)
    const [activeTask,setActiveTask] = useState(0)
    const [taskList,editTaskList] = useReducer(taskReducer,[])

    return (
        <>
        {
            !viewBoard ? (
        <div className={'tasks-container'} onClick={()=>setViewBoard(true)}>
            <div className='task'>{taskList[activeTask] || "Add Task"} </div>
        </div>
        ) : (
        <>
            <div style={{position: "absolute", left: "0", right: "0", top: "0", bottom: "0", zIndex: "2"}} onClick={()=>setViewBoard(false)}></div>
            <div className={'tasks-container visible'}>
                <button className='task-add' onClick={()=>editTaskList({ type: "insert", value: "New Task"})}>+</button>
                { taskList && taskList.map((_,index)=><Task title={taskList[index]} index={index} taskEditor={editTaskList} setActive={setActiveTask}/>) }
            </div>
        </>
        )}
        </>
    )
}

export default Tasks

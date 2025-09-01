import './Tasks.css'
import { useState } from 'react';

function Tasks() {

    const [viewBoard,setViewBoard] = useState<boolean>(false)

    return (
    <div className={"tasks-container " + (viewBoard && "visible")}>
            <div className="tasks" onClick={()=>setViewBoard(!viewBoard)}>
                {viewBoard ? "opened" : "closed"}
            </div>
        </div>
    )
}

export default Tasks

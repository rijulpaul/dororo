import './Timer.css'
import Button from './Button/Button'
import { useState } from 'react'

function Timer() {

    const [timer,setTimer] = useState<number>(0);

    return(
        <div className='timer-container'>
            <div className='timer'>{timer/100 || "00"}:{timer%100||"00"}</div>
            <div className='buttons'>
                <Button title="Start"/>
                <Button title='Stop'/>
            </div>
        </div>
    )
}

export default Timer

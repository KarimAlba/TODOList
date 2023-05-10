import React, { useState } from 'react'
import taskStyles from './TaskComponent.module.scss'

const Task = (props) => {
    const { task } = props;
    const [lineThrow, setLineThrow] = useState(false);

    const handleSwitchClick = (e) => {
        setLineThrow(!lineThrow);
    }

    return (
        <div className={taskStyles['tasks-card']} key={task.color + task.name + 222}>
            <div className={task.color} key={task.name + 333 + task.color} />
            <div 
                className={taskStyles['text-opened-task']}
                key={task.name + 222 + task.color}
                style={lineThrow ? {textDecoration: 'line-through'} : {textDecoration: 'none'}}  
            >
                <h3 key={task.description + task.name + 'j' + 0}>
                    {task.name}
                </h3>
                <p key={task.name + 'j' + task.description + 3}>
                    {task.description}
                </p>
            </div>
                <label className='switch'>
                    <input type="checkbox" className='switch-input'/>
                    <span className='slider round'  onClick={handleSwitchClick}></span>
                </label>
        </div>
    )
}

export default Task;
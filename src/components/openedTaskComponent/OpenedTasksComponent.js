import React from 'react'
import openedTasksStyles from './OpenedTasksComponent.module.scss'

const OpenedTasks = (props) => {
    const { openedTasks } = props;

    const tasksForRender = openedTasks.map( (task) =>
    <div className={openedTasksStyles.tasksCard} key={task.color + task.name + 222}>
        <div className={task.color} key={task.name + 333 + task.color} />
        <div 
            className={openedTasksStyles.textOfOpenedTask}
            key={task.name + 222 + task.color} 
        >
            <h3 key={task.description + task.name + 'j' + 0}>
                {task.name}
            </h3>
            <p key={task.name + 'j' + task.description + 3}>
                {task.description}
            </p>
        </div>
            <label className='switch'>
                <input type="checkbox" className='switchInput'/>
                <span className='slider round'  onClick={handleSwitchClick}></span>
            </label>
    </div>
)

    function handleSwitchClick(e) {
        const checkedText = e.target.parentNode.parentNode.children[1];
        if (checkedText.style.textDecoration == 'line-through') {
            checkedText.style.textDecoration = 'none'
        } else {
            checkedText.style.textDecoration = 'line-through'
        }
    }
    
    return (
        <div className={openedTasksStyles.openedTasks}>
            {tasksForRender}
        </div>
    )
}

export default OpenedTasks;
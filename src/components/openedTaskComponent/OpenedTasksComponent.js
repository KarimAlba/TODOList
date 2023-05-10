import React from 'react'
import openedTasksStyles from './OpenedTasksComponent.module.scss'
import Task from '../taskComponent/TaskComponent'

const OpenedTasks = (props) => {
    const { openedTasks } = props;
    
    return (
        <div className={openedTasksStyles['opened-tasks']}>
            {openedTasks.map((task) => (
                <Task task={task} key={Number(new Date()) + task.id} />
                ))}
        </div>
    )
}

export default OpenedTasks;
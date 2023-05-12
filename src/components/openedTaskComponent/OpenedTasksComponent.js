import React from 'react'
import openedTasksStyles from './OpenedTasksComponent.module.scss'
import Task from '../taskComponent/TaskComponent'

const OpenedTasks = (props) => {
    const { tasks } = props;

    return (
        <div className={openedTasksStyles['opened-tasks']}>
            {tasks.map((task) => (
                <Task
                    key={Number(new Date()) + task.id}
                    task={task}
                    onTaskMarked={() => props.onTaskMarked(task.id)}
                />
            ))}
        </div>
    )
}

export default OpenedTasks;
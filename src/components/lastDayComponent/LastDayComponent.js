import React, { useState } from 'react'
import OpenedTasks from '../openedTaskComponent/OpenedTasksComponent'
import styles from './LastDayComponent.module.scss'

console.log('last')

const Day = (props) => {
    const [isOpened, setIsOpened] = useState(false);
    
    const handleButtonClick = (e) => {
        e.preventDefault();
        setIsOpened(!isOpened);
    }

    return (
        <div>
            <div className={styles['days-container']} >
                <div className={styles['task-header']}>
                    <div className={styles['gray-line']}></div>
                    <h3>
                        {(new Date(props.day.title)).toLocaleDateString()}
                    </h3>
                    <button onClick={handleButtonClick} />
                </div>
                {isOpened ? <OpenedTasks tasks={props.day.dayTasks} onTaskMarked={(id) => props.onTaskMarked(id)} /> : null}
            </div>
        </div>
    )
}

export default Day;
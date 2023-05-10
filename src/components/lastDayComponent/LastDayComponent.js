import React, { useState } from 'react'
import OpenedTasks from '../openedTaskComponent/OpenedTasksComponent'
import styles from './LastDayComponent.module.scss'

const Day = (props) => {
    const { day } = props;

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
                        {day.title}
                    </h3>
                    <button onClick={handleButtonClick} />
                </div>
                {isOpened ? <OpenedTasks openedTasks={day.dayTasks} /> : null}
            </div>
        </div>
    )
}

export default Day;
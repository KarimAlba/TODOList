import React, { useEffect, useMemo, useState } from 'react'
import OpenedTasks from '../openedTaskComponent/OpenedTasksComponent'
import styles from './LastDayComponent.module.scss'

const Day = (props) => {
    const [isOpened, setIsOpened] = useState(false);
    
    const handleButtonClick = (e) => {
        e.preventDefault();
        setIsOpened(!isOpened);
    }

    const day = useMemo(() => {
        return props.day;
    }, [props.day.dayTasks]);

    return (
        <div>
            <div className={styles['days-container']} >
                <div className={styles['task-header']}>
                    <div className={styles['gray-line']}></div>
                    <h3>
                        {(new Date(day.title)).toLocaleDateString()}
                    </h3>
                    <button onClick={handleButtonClick} />
                </div>
                {isOpened ? <OpenedTasks tasks={day.dayTasks} onTaskMarked={(id) => props.onTaskMarked(id)} /> : null}
            </div>
        </div>
    )
}

export default Day;
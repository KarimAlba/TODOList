import React, { useState } from 'react'
import todayTaskStyle from './TodayTasksComponent.module.scss';
import OpenedTasks from '../openedTaskComponent/OpenedTasksComponent';

const TodayTask = (props) => {
    const day = props.dayForRender;
    const [selectedDayForRender, setSelectedDayForRender] = useState(day);
    const [isOpened, setIsOpened] = useState(true);

    const handlerButtonClick = (e) => {
        e.preventDefault();
        if (isOpened) {
            e.target.className = 'closed-button';
            setIsOpened(!isOpened);
        } else {
            e.target.className = 'opened-button';
            setIsOpened(!isOpened);
        }
    }

    return (
        <div className={todayTaskStyle['today-tasks']}>
            <div className={todayTaskStyle['task-title']}>
                <button 
                    className='opened-button'
                    onClick={handlerButtonClick} 
                />
                <h3>Today Tasks:</h3>
            </div>
            {isOpened? <OpenedTasks openedTasks={selectedDayForRender}/> : null}
        </div>
    )
}

export default TodayTask;
import React, { useState } from 'react'
import todayTaskStyle from './TodayTasksComponent.module.scss';
import OpenedTasks from '../openedTaskComponent/OpenedTasksComponent';

const TodayTask = (props) => {
    const day = props.dayForRender;
    const [selectedDayForRender, setSelectedDayForRender] = useState(day);
    const [isOpened, setIsOpened] = useState(true);

    function handlerButtonClick(e) {
        e.preventDefault();
        if (isOpened) {
            e.target.className = 'closedStatusClassName';
            setIsOpened(!isOpened);
        } else {
            e.target.className = 'openedStatusClassName';
            setIsOpened(!isOpened);
        }
    }

    return (
        <div className={todayTaskStyle.todayTask}>
            <div className={todayTaskStyle.openedTaskTitle}>
                <button 
                    className='openedStatusClassName'
                    onClick={handlerButtonClick} 
                />
                <h3>Today Tasks:</h3>
            </div>
            {isOpened? <OpenedTasks openedTasks={selectedDayForRender}/> : null}
        </div>
    )
}

export default TodayTask;
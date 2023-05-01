import React, { useState } from 'react'
import todayTaskStyle from './TodayTasksComponent.module.scss';
import OpenedTasks from '../openedTaskComponent/OpenedTasksComponent';

const TodayTask = (props) => {
    const tasksForRender = props.dayForRender.arrayOfTasks;
    const [openedStatusClassName, setOpenedStatusClassName] = useState('closedStatusClassName');
    const [selectedDayForRender, setSelectedDayForRender] = useState(tasksForRender);

    function handlerButtonClick(e) {
        const card = e.target.parentNode.nextSibling;
        if (openedStatusClassName == 'closedStatusClassName') {
            card.style.display = 'flex'
            setOpenedStatusClassName('openedStatusClassName');
        } else {
            setOpenedStatusClassName('closedStatusClassName');
            card.style.display = 'none'
        }
    }

    return (
        <div className={todayTaskStyle.todayTask}>
            <div className={todayTaskStyle.openedTaskTitle}>
                <button 
                    className={openedStatusClassName} 
                    onClick={handlerButtonClick} 
                />
                <h3>{props.dayForRender.title + " "}:</h3>
            </div>
            <OpenedTasks openedTasks = {selectedDayForRender}/>
        </div>
    )
}

export default TodayTask;
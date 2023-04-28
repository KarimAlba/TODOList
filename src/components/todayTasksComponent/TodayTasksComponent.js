import React, { useState } from 'react'
import todayTaskStyle from './TodayTasksComponent.module.scss';
import OpenedTasks from '../openedTaskComponent/OpenedTasksComponent';

const TodayTask = (props) => {
    const tasksForRender = props.dayForRender.arrayOfTasks;
    const [openedStatusClassName, setOpenedStatusClassName] = useState('openedStatusClassName');
    const [selectedDayForRender, setSelectedDayForRender] = useState(tasksForRender);

    function handlerButtonClick() {
        if (openedStatusClassName == 'closedStatusClassName') {
            setOpenedStatusClassName('openedStatusClassName');
            setSelectedDayForRender(tasksForRender);  
        } else {
            setOpenedStatusClassName('closedStatusClassName');
            setSelectedDayForRender([]);  
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
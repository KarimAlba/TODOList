import React, { useState } from 'react'
import todayTaskStyle from './TodayTasksComponent.module.scss';
import OpenedTasks from '../openedTaskComponent/OpenedTasksComponent';

const TodayTask = (props) => {
    const tasksForRender = props.dayForRender.arrayOfTasks;
    const [selectedDayForRender, setSelectedDayForRender] = useState(tasksForRender);

    const closedContainer = 
        <div className={todayTaskStyle.todayTask}>
            <div className={todayTaskStyle.openedTaskTitle}>
                <button 
                    className='closedStatusClassName'
                    onClick={handlerButtonClick} 
                />
                <h3>{props.dayForRender.title + " "}:</h3>
            </div>
        </div>

    const openedContainer = 
        <div className={todayTaskStyle.todayTask}>
            <div className={todayTaskStyle.openedTaskTitle}>
                <button 
                    className='openedStatusClassName'
                    onClick={handlerButtonClick} 
                />
                <h3>{props.dayForRender.title + " "}:</h3>
            </div>
            <OpenedTasks openedTasks = {selectedDayForRender}/>
        </div>

    const [renderBlock, setRenderBlock] = useState(closedContainer);

    function handlerButtonClick(e) {
        e.preventDefault();
        if (e.target.className == 'closedStatusClassName') {
            e.target.className = 'openedStatusClassName';
            setRenderBlock(openedContainer);
        } else {
            e.target.className = 'closedStatusClassName';
            setRenderBlock(closedContainer);
        }
    }

    return (
        <div>
            {renderBlock}
        </div>

    )
}

export default TodayTask;
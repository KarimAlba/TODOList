import React, { useState } from 'react'
import todayTaskStyle from '../todayTasksComponent/TodayTasksComponent.module.scss';

const TodayTask = (props) => {
    const [openedStatusClassName, setOpenedStatusClassName] = useState('openedStatusClassName');
    const [selectedDayForRender, setSelectedDayForRender] = useState(props.dayForRender);

    const openedTasks = selectedDayForRender.map( (task) =>
        <div className={todayTaskStyle.tasksCard} key={task.color + task.name + 222}>
            <div className={task.color} key={task.name + 333 + task.color} />
            <div 
                className={todayTaskStyle.textOfOpenedTask}
                key={task.name + 222 + task.color} 
            >
                <h3 key={task.description + task.name + 'j' + 0}>
                    {task.name}
                </h3>
                <p key={task.name + 'j' + task.description + 3}>
                    {task.description}
                </p>
            </div>
                <label className='switch'>
                    <input type="checkbox" className='switchInput'/>
                    <span className='slider round'  onClick={handleSwitchClick}></span>
                </label>
        </div>
    )

    function handleSwitchClick(e) {
        const checkedText = e.target.parentNode.parentNode.children[1];
        if (checkedText.style.textDecoration == 'line-through') {
            checkedText.style.textDecoration = 'none'
        } else {
            checkedText.style.textDecoration = 'line-through'
        }
    }

    function handlerButtonClick() {
        if (openedStatusClassName == 'closedStatusClassName') {
            setOpenedStatusClassName('openedStatusClassName');    
        } else {
            setOpenedStatusClassName('closedStatusClassName'); 
        }
    }

    return (
        <div className={todayTaskStyle.todayTask}>
            <div className={todayTaskStyle.openedTaskTitle}>
                <button 
                    className={openedStatusClassName} 
                    onClick={handlerButtonClick} 
                />
                <h3>Today Task:</h3>
            </div>
            <div className={todayTaskStyle.openedTasks}>{openedTasks}</div>
        </div>
    )
}

export default TodayTask;
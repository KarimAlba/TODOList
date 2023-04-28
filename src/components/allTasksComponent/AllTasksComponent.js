import allTasksStyles from '../allTasksComponent/AlTasksComponent.module.scss';
import TodayTasksStyles from '../todayTasksComponent/TodayTasksComponent.module.scss'
import OpenedTasks from '../openedTaskComponent/OpenedTasksComponent'
import React, { useState } from 'react'

const AllTasksComponent = (props) => {
    const { daysForRender } = props;
    const allTasksBlocks = daysForRender.map(
        (day) => 
        <div className={allTasksStyles.containerOfDay} key={12 + day.title + '12'}>
            <div className={allTasksStyles.grayLine} key={day.title + '12' + 12} />
            <h3 key={day.title + '12'}>
                {day.title}
            </h3>
            <button key={day.title + '12' + 'button'} onClick={handleClick} />
        </div>
    )

    const openedTasksBlock = daysForRender.map(
        (day) => 
            <div className={allTasksStyles.openedTasksContainer} 
                key={1 + day.title + String(new Date())}
            >
                <div className={TodayTasksStyles.openedTaskTitle} 
                    key={2 + day.title + String(new Date())}
                >
                    <button key={day.title + String(new Date())} onClick={handleClick} />
                    
                    <h3 key={day.title + '21'+ String(new Date())} 
                        className={allTasksStyles.dayTitle}
                    >
                        {day.title}
                    </h3>
                </div>
                <OpenedTasks openedTasks={day.arrayOfTasks}/> 
            </div>
    )

    const [elemForRender, setElemForRender] = useState(allTasksBlocks);

    function handleClick(e) {
        if (elemForRender == allTasksBlocks) {
            setElemForRender(openedTasksBlock);
            console.log(elemForRender)
        } else {
            setElemForRender(allTasksBlocks);
        }
    }

    return (
        <div className={allTasksStyles.allTasks}>
           {elemForRender}
        </div>
    )
}

export default AllTasksComponent;
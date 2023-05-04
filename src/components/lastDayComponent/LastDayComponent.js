import React, { useState } from 'react'
import OpenedTasks from '../openedTaskComponent/OpenedTasksComponent'
import styles from './LastDayComponent.module.scss'
import allTasksStyles from '../allTasksComponent/AlTasksComponent.module.scss'

const Day = (props) => {
    const { day } = props;

    const openedTasksBlocks = (
        <div>
            <div className={allTasksStyles.containerOfDay} >
                <div className={allTasksStyles.grayLine}  />
                <h3>
                    {day.title}
                </h3>
                <button onClick={handleButtonClick} />
            </div>
            <OpenedTasks openedTasks={day.arrayOfTasks}/> 
        </div>
    )

    const closedTasksBlocks = (
        <div>
            <div className={allTasksStyles.containerOfDay}>
                <div className={allTasksStyles.grayLine} />
                <h3>
                    {day.title}
                </h3>
                <button onClick={handleButtonClick} />
            </div>
        </div>
    )

    const [renderBlock, setRenderBlock] = useState(closedTasksBlocks);

    function handleButtonClick(e) {
        e.preventDefault();
        if (closedTasksBlocks == renderBlock) {
            setRenderBlock(openedTasksBlocks)
            console.log(renderBlock);
        } else {
            setRenderBlock(closedTasksBlocks)
            console.log(renderBlock);
        }
    }

    return (
        <div>
            {renderBlock}
        </div>
    )
}

export default Day;
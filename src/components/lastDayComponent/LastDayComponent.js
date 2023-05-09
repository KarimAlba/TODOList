import React, { useState } from 'react'
import OpenedTasks from '../openedTaskComponent/OpenedTasksComponent'
import styles from './LastDayComponent.module.scss'
import allTasksStyles from '../allTasksComponent/AlTasksComponent.module.scss'

const Day = (props) => {
    const { day } = props;

    const [isOpened, setIsOpened] = useState(false);

    function handleButtonClick(e) {
        e.preventDefault();
        setIsOpened(!isOpened);
    }

    return (
        <div>
            <div className={allTasksStyles.containerOfDay} >
                <div className={allTasksStyles.grayLine}  />
                <h3>
                    {day.title}
                </h3>
                <button onClick={handleButtonClick} />
            </div>
            {isOpened ? <OpenedTasks openedTasks={day.dayTasks} /> : null}
        </div>
    )
}

export default Day;
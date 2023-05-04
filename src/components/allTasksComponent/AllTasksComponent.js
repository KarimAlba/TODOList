import React, { useState } from 'react'
import allTasksStyles from '../allTasksComponent/AlTasksComponent.module.scss'
import LastDay from '../lastDayComponent/LastDayComponent'

const AllTasksComponent = (props) => {
    const { daysForRender } = props;

    const renderBlock = daysForRender.map( day =>
            <LastDay key={day.title + String(new Date()) + '12'} day={day}/>
        )

    return (
        <div className={allTasksStyles.allTasks}>
           {renderBlock}
        </div>
    )
}

export default AllTasksComponent;
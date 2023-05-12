import { useMemo, useEffect } from 'react'
import allTasksStyles from '../allTasksComponent/AlTasksComponent.module.scss'
import LastDay from '../lastDayComponent/LastDayComponent'

const AllTasksComponent = (props) => {
    const daysContainer = useMemo(() => {
        return props.daysContainer;
    }, [props.daysContainer]);

    const renderDays = useMemo(() => (
        daysContainer.map(day =>
            <LastDay
                key={day.title + String(new Date()) + '12'}
                day={day}
                onTaskMarked={(id) => props.onTaskMarked(id)}
            />
        )
    ), [daysContainer]);

    return (
        <div className={allTasksStyles['all-tasks']}>
            {renderDays}
        </div>
    )
}

export default AllTasksComponent;
import allTasksStyles from '../allTasksComponent/AlTasksComponent.module.scss';
import LastDay from '../lastDayComponent/LastDayComponent';

const AllTasksComponent = (props) => {

    return (
        <div className={allTasksStyles['all-tasks']}>
            {props.daysContainer.map(day =>
                <LastDay
                    key={day.title + '12'}
                    day={day}
                    onTaskMarked={(id) => props.onTaskMarked(id)}
                />
            )}
        </div>
    )
}

export default AllTasksComponent;
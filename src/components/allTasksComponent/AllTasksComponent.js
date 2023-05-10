import allTasksStyles from '../allTasksComponent/AlTasksComponent.module.scss'
import LastDay from '../lastDayComponent/LastDayComponent'

const AllTasksComponent = (props) => {
    const { daysForRender } = props;

    return (
        <div className={allTasksStyles['all-tasks']}>
            {daysForRender.map(day =>
                <LastDay key={day.title + String(new Date()) + '12'} day={day}/>
            )}
        </div>
    )
}

export default AllTasksComponent;
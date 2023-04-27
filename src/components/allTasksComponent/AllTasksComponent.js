import allTasksStyles from '../allTasksComponent/AlTasksComponent.module.scss';

const AllTasksComponent = (props) => {
    const { daysForRender } = props;
    console.log(daysForRender)

    const allTasksBlocks = daysForRender.map(
        (day) => 
            <div className={allTasksStyles.containerOfDay} key={12 + day.title + '12'}>
                <div className={allTasksStyles.grayLine} key={day.title + '12' + 12} />
                <h3 key={day.title + '12'}>
                    {day.title}
                </h3>
                <button key={day.title + '12' + 'button'} />
            </div>
    )

    return (
        <div className={allTasksStyles.allTasks}>
           {allTasksBlocks} 
        </div>
    )
}

export default AllTasksComponent;
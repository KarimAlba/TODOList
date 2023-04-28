import allTasksStyles from '../allTasksComponent/AlTasksComponent.module.scss'
import OpenedTasks from '../openedTaskComponent/OpenedTasksComponent'

const AllTasksComponent = (props) => {
    const { daysForRender } = props;

    const allTasksBlocks = daysForRender.map(
        (day) => 
        <div key={21 + Number(new Date()) + day.title + 1234}>
            <div className={allTasksStyles.containerOfDay} key={12 + day.title + '12'}>
                <div className={allTasksStyles.grayLine} key={day.title + '12' + 12} />
                <h3 key={day.title + '12'}>
                    {day.title}
                </h3>
                <button key={day.title + '12' + 'button'} onClick={handleClick} />
            </div>
            <OpenedTasks openedTasks={day.arrayOfTasks}/> 
        </div>
    )

    function handleClick(e) {
        const card = e.target.parentNode.nextSibling;
        if (card.style.display !== 'flex') {
            card.style.display = 'flex'
        } else {
            card.style.display = 'none'
        }
    }

    return (
        <div className={allTasksStyles.allTasks}>
           {allTasksBlocks}
        </div>
    )
}

export default AllTasksComponent;
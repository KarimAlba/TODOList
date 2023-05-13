import '../root/App.scss'
import React, { useState, useEffect } from 'react'
import data from '../db/tasks.json'
import TodayTaskComponent from '../components/todayTasksComponent/TodayTasksComponent'
import AllTasksComponent from '../components/allTasksComponent/AllTasksComponent'
import Header from '../components/headerComponent/HeaderComponent'
import NewsCard from '../components/newsCardComponent/NewsCardComponent'

const App = () => {
  const [todayTasks, setTodayTasks] = useState([]);

  const [daysContainer, setDaysContainer] = useState([]);

  const findActualTasks = (arr) => {
    let actualTasks = arr.filter(item => 
      new Date(item.date).toLocaleDateString('en-ca') > new Date().toLocaleDateString('en-ca')
    );
    return actualTasks;
  }

  const prepareArrayOfAllTasks = (arr) => {
    let index = arr.findLastIndex(item => item.date == arr[0].date);
    let splicedArr = arr.splice(0, index + 1);
    let day = {};
    day.dayTasks = splicedArr;
    day.title = splicedArr[0].date;
    let copy = Object.assign([], daysContainer);
    copy.push(day);
    setDaysContainer(copy);
    if (arr.length !== 0) {
      prepareArrayOfAllTasks(arr);
    } else {
      return
    }
  }

  const [stateOfNewsCard, setStateOfNewsCard] = useState(false);

  const getStateOfNewsCard = () => setStateOfNewsCard(!stateOfNewsCard);

  const markTask = (id) => {
    const dayIndex = daysContainer.findIndex(item => item.dayTasks.find(task => task.id === id));
    const taskIndex = daysContainer[dayIndex].dayTasks.findIndex(task => task.id === id);
    if (dayIndex !== -1 && taskIndex !== -1) {
      const taskCopy = {
        ...daysContainer[dayIndex].dayTasks[taskIndex],
        done: !daysContainer[dayIndex].dayTasks[taskIndex].done
      };
      setDaysContainer([
        ...daysContainer.slice(0, dayIndex),
        {
          ...daysContainer[dayIndex],
          dayTasks: [
            ...daysContainer[dayIndex].dayTasks.slice(0, taskIndex),
            taskCopy,
            ...daysContainer[dayIndex].dayTasks.slice(taskIndex + 1),
          ],
        },
        ...daysContainer.slice(dayIndex + 1),
      ])
    }
  };

  const markTodayTasks = (id) => {
    let index = todayTasks.findIndex(item => item.id === id);
    let copyTask = {
      ...todayTasks[index],
      done: !todayTasks[index].done
    }
    setTodayTasks([
      ...todayTasks.slice(0, index), 
      copyTask,
      ...todayTasks.slice(index + 1)
    ])
  }

  useEffect(
    () => {
      setTodayTasks(data.tasks.filter(item => item.date == new Date().toLocaleDateString('en-ca')));
      setTimeout(() => {
        const actualTasks = findActualTasks(data.tasks);
        prepareArrayOfAllTasks(actualTasks);
      }, 0);
    },
    []
  );

  return (
    <div className="App">
      <div className='app-title'>
        <h1>To Do</h1>
        <Header getStateOfNewsCard={getStateOfNewsCard} />
      </div>
      <TodayTaskComponent todayTasks={todayTasks} onTaskMarked={(id) => markTodayTasks(id)} />
      <AllTasksComponent daysContainer={daysContainer} onTaskMarked={(id) => markTask(id)} />
      {stateOfNewsCard ? <NewsCard/> : null}
    </div>
  );
}

export default App;

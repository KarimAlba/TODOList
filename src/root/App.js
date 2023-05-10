import '../root/App.scss'
import React, { useState, useEffect } from 'react'
import data from '../db/tasks.json'
import TodayTaskComponent from '../components/todayTasksComponent/TodayTasksComponent'
import AllTasksComponent from '../components/allTasksComponent/AllTasksComponent'
import Header from '../components/headerComponent/HeaderComponent'
import NewsCard from '../components/newsCardComponent/NewsCardComponent'
import moment from 'moment';

function App() {

  const [todayTasks, setTodayTasks] = useState(data.tasks.slice(0, 3));
  const [allTasks, setAllTasks] = useState(data.tasks.sort((a, b) => moment(b.date, 'DD.MM.YY') - moment(a.date, 'DD.MM.YY')));

  const [allDaysForRender, setAllDaysForRender] = useState([]);
  const days = [];

  //мб days тоже в состояние и его расширять потом в функции ниже

  const prepareArrayOfAllTasks = (arr) => {
    if (arr.length > 0) {
      let lastIndex = arr.findLastIndex(item => item.date == arr[0].date);
      const dayTasks = arr.splice(0, lastIndex+1);
  
      let copyOfSubArr = {dayTasks};
      copyOfSubArr.title = dayTasks[0].date;
      days.push(copyOfSubArr);
      if (arr.length !== 0) {
        prepareArrayOfAllTasks(arr);
      } else {
        return
      }
    } else {
      return
    }
  }

  const [stateOfNewsCard, setStateOfNewsCard] = useState(false);

  const getStateOfNewsCard = () => setStateOfNewsCard(!stateOfNewsCard);

  React.useEffect(
    () => {
      prepareArrayOfAllTasks(allTasks);
      let otherDays = days.slice(1, days.length);
      setAllDaysForRender(otherDays);
    },
    []
  );

  return (
    <div className="App">
      <div className='app-title'>
        <h1>To Do</h1>
        <Header getStateOfNewsCard={getStateOfNewsCard} />
      </div>
      <TodayTaskComponent dayForRender={todayTasks} />
      <AllTasksComponent daysForRender={allDaysForRender} />
      {stateOfNewsCard ? <NewsCard/> : null}
    </div>
  );
}

export default App;

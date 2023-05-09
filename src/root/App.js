import '../root/App.scss'
import React, { useState, useEffect } from 'react'
import data from '../db/tasks.json'
import TodayTaskComponent from '../components/todayTasksComponent/TodayTasksComponent'
import AllTasksComponent from '../components/allTasksComponent/AllTasksComponent'
import Header from '../components/headerComponent/HeaderComponent'
import NewsCard from '../components/newsCardComponent/NewsCardComponent'
var moment = require('moment');

function App() {
  const tasks = data.tasks;
  const [allDaysForRender, setAllDaysForRender] = useState([]);
  const days = [];

  React.useEffect(
    () => {
      prepareArrayOfAllTasks(tasks);
      let otherDays = days.slice(1, days.length);
      setAllDaysForRender(otherDays);
    }, []
  )

  tasks.sort((a, b) => moment(b.date, 'DD.MM.YY') - moment(a.date, 'DD.MM.YY'));
  let today = tasks.slice(0, 3);

  function prepareArrayOfAllTasks(arr) {
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

  function getStateOfNewsCard(state) {
    setStateOfNewsCard(state);
  }

  const [arrOfNews, setArrOfNews] = useState([]);

  function getNews(arr) {
    setArrOfNews(Object.assign([], arr));
  }

  return (
    <div className="App">
      <div className='titleOFApp'>
        <h1>To Do</h1>
        <Header getStateOfNewsCard={getStateOfNewsCard} getNews={getNews}/>
      </div>
      <TodayTaskComponent dayForRender={today} />
      <AllTasksComponent daysForRender={allDaysForRender} />
      <NewsCard stateOfNewsCard={stateOfNewsCard} arrOfNews={arrOfNews}/>
    </div>
  );
}

export default App;

import '../root/App.scss'
import axios, { all } from 'axios'
import React, { useState } from 'react'
import data from '../db/tasks.json'
import TodayTaskComponent from '../components/todayTasksComponent/TodayTasksComponent'
import AllTasksComponent from '../components/allTasksComponent/AllTasksComponent'
import NewsComponent from '../components/newsComponent/NewsComponent'
import CardOfNews from '../components/cardOfNewsComponent/CardOfNewsComponent'
var moment = require('moment');

function App() {
  let arrayOfTitles = [];
  const tasks = data.tasks

  const [allDaysForRender, setAllDaysForRender] = useState([]);
  const [newsData, setNewsData] = useState(arrayOfTitles);
  const [newsURL, setNewsURL] = useState('https://newsdata.io/api/1/news?country=de&apikey=pub_2148842010334e142d800e3d99be32c1e6789')
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

 const getUrl = (url) => {
  setNewsURL(url);
  axios.get(newsURL).then((resp) => {
    const data = resp.data.results;
    data.forEach(element => {
      arrayOfTitles.push(element.title);
    });
    let copy = Object.assign([], arrayOfTitles);
    setNewsData(copy);
  });
 }

  return (
    <div className="App">
      <div className='titleOFApp'>
        <h1>To Do</h1>
        <NewsComponent getUrl = {getUrl}/>
      </div>
      <TodayTaskComponent dayForRender={today} />
      <AllTasksComponent daysForRender={allDaysForRender} />
      <CardOfNews news={newsData}/>
    </div>
  );
}

export default App;

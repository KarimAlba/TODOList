import '../root/App.scss'
import axios, { all } from 'axios'
import React, { useState } from 'react'
import TodayTaskComponent from '../components/todayTasksComponent/TodayTasksComponent'
import AllTasksComponent from '../components/allTasksComponent/AllTasksComponent'
import NewsComponent from '../components/newsComponent/NewsComponent'
import CardOfNews from '../components/cardOfNewsComponent/CardOfNewsComponent'

class Day {
  constructor(title, arrayOfTasks) {
    this.title = title;
    this.arrayOfTasks = arrayOfTasks;
  }
}

class Task {
  constructor(color, name) {
    this.name = name;
    this.color = color;
    this.description = 'Lorem Ipsum Dolor Sit met...'
  }
}

const today = new Day('Today Task', [
    new Task('redLine', 'Visit David'),
    new Task('blueLine', 'Goceries For Dinner'),
    new Task('yellowLine', 'Fix Dad`s iPad'),
  ]
)

const tomorrow = new Day('Tomorrow', [
    new Task('redLine', 'Mmm Grechka'),
    new Task('yellowLine', 'Breakfast with TambiMasaev'),
  ]
)

const firstMay = new Day('01/05 Tasks', [
    new Task('blueLine', 'Yoga Class'),
    new Task('blueLine', 'To Fix Up Z Car'),
    new Task('yellowLine', 'Dinner With Anton Spraul'),
  ]
)

function App() {
  const allDays = [
    tomorrow,
    firstMay,
  ]

  let arrayOfTitles = []; 

  const [nowADay, setNowADay] = useState(today);
  const [allDaysForRender, setAllDaysForRender] = useState(allDays);
  const [newsData, setNewsData] = useState(arrayOfTitles);
  const [newsURL, setNewsURL] = useState('https://newsdata.io/api/1/news?country=de&apikey=pub_2148842010334e142d800e3d99be32c1e6789')

 const getUrl = () => {
  setNewsURL('https://newsdata.io/api/1/news?country=de&apikey=pub_2148842010334e142d800e3d99be32c1e6789')
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
      <TodayTaskComponent dayForRender={nowADay} />
      <AllTasksComponent daysForRender={allDaysForRender} />
      <CardOfNews news={newsData}/>
    </div>
  );
}

export default App;

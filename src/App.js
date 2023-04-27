import './root/App.scss'
import React, { useState } from 'react'
import TodayTaskComponent from './components/todayTasksComponent/TodayTasksComponent'
import AllTasksComponent from './components/allTasksComponent/AllTasksComponent'
import mechanic from './assets/imgs/mechanics.svg';

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

function App() {
  const allDays = [
    today,
    tomorrow,
  ]

  // const [dayForRender, setDayForRender] = useState();
  // setDayForRender(allDays[0])

  console.log(allDays[1])

  return (
    <div className="App">
      <div className='titleOFApp'>
        <h1>To Do</h1>
        <img src={mechanic}/>
      </div>
      <TodayTaskComponent dayForRender={allDays[1]}/>
      <AllTasksComponent />
    </div>
  );
}

export default App;

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

  const [nowADay, setNowADay] = useState(today);
  const [allDaysForRender, setAllDaysForRender] = useState(allDays);

  return (
    <div className="App">
      <div className='titleOFApp'>
        <h1>To Do</h1>
        <img src={mechanic} />
      </div>
      <TodayTaskComponent dayForRender={nowADay} />
      <AllTasksComponent daysForRender={allDaysForRender} />
    </div>
  );
}

export default App;

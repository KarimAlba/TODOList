import './App.scss'
import React, { useState } from 'react'
import TodayTaskComponent from './components/todayTasksComponent/TodayTasksComponent'
import AllTasksComponent from './components/allTasksComponent/AllTasksComponent'
import mechanic from './imgs/mechanics.svg';

function App() {
  const allDays = [
      [    
        {titleOfTask: 'Today Tasks', color: 'redLine', name: 'Visit David', description: 'Lorem Ipsum Dolor Sit met...'},
        {color: 'blueLine', name: 'Goceries For Dinner', description: 'Lorem Ipsum Dolor Sit met...'},
        {color: 'yellowLine', name: 'Fix Dad`s iPad', description: 'Lorem Ipsum Dolor Sit met...'},
      ],
  ]

  // const [dayForRender, setDayForRender] = useState();
  // setDayForRender(allDays[0])

  console.log(allDays[0])

  return (
    <div className="App">
      <div className='titleOFApp'>
        <h1>To Do</h1>
        <img src={mechanic}/>
      </div>
      <TodayTaskComponent dayForRender={allDays[0]}/>
      <AllTasksComponent />
    </div>
  );
}

export default App;

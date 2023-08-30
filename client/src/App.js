import './App.css';
import GlobalData from './component/GlobalData';
import Hello from './component/Hello';
import React from 'react';
import Score from './component/Score';
import Activity from './component/Activity';
import Session from './component/Session';
import Performance from './component/Performance';
import Header from './component/Header';
import SideBar from './component/SideBar'

function App() {
  const userId = 12

  return (
    <div className="app">
      <Header />
      <SideBar />
      <div className='content'>
        <div className='title'>
          <Hello userId={userId}/>
        </div>
        <div className='dashboard'>
          <div className='dashboard_section1'>
            <div className='dashboard_activity'>
              <Activity userId={userId} />
            </div>
            <div className='dashboard_chart'>
              <Session userId={userId} />
              <Performance userId={userId} />
              <Score userId={userId} />
            </div>
          </div>
          <div className='dashboard_section2'>
            <GlobalData userId={userId} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

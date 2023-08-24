import './App.css';
import GlobalData from './component/GlobalData';
import Hello from './component/Hello';
import React from 'react';
import Score from './component/Score';
import Activity from './component/Activity';
import Session from './component/Session';
import Performance from './component/Performance';
//import Test from './component/Test'

function App() {
  const userId = 12

  return (
    <div className="app">
      <Hello userId={userId}/>
      <GlobalData userId={userId} />
      <Score userId={userId} />
      <Activity userId={userId} />
      <Session userId={userId} />
      <Performance userId={userId} />
    </div>
  );
}

export default App;

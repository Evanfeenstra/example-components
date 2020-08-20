import React from 'react';
import './App.css';
import Tabs from './tabs.js'
import { useHistory } from "react-router-dom"

function App() {
  const history = useHistory()
  const path = history.location.pathname.substring(1);
  console.log(path)
  return (
    <div className="App">
      <header className="App-header">
        <Tabs 
          tabs={["Home","About","Contact"]}
          onSelect={t=> history.push("/"+t)}  
        />
      </header>
    </div>
  );
}

export default App;

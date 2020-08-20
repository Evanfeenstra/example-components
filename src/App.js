import React from 'react';
import './App.css';
import Tabs from './tabs.js'
import { useHistory, Switch, Route } from "react-router-dom"

function App() {
  const history = useHistory()
  
  return (
    <div className="App">
      <header className="App-header">
        <Tabs 
          tabs={["Home","About","Contact"]}
          onSelect={t=> {
            const p = t==='Home' ? '/' : '/'+t
            history.push(p)
          }} 
        />
      </header>
      <main className="page">
        <Switch>
          <Route path="/" exact>HOME</Route>
          <Route path="/About" exact>ABOUT</Route>
          <Route path="/Contact" exact>CONTACT</Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;

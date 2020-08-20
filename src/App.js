import React from 'react';
import './App.css';
import Tabs from './tabs.js'
import { useHistory, Switch, Route } from "react-router-dom"
import Slider from './slider'

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
          <Route path="/" exact>
            <div className="home">
              <span>HOME</span>
              <Slider />
            </div>
          </Route>
          <Route path="/About" exact>ABOUT</Route>
          <Route path="/Contact" exact>CONTACT</Route>
          <Route path="*">
            <div>404 Not Found</div>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;

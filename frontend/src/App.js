import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home'
import NavBar from './components/NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />

        <div className='pages'>
            <Switch>
                <Route path="/" component={Home} exact />
            </Switch>
        </div>
      </div>
    );
  }
}

export default App;

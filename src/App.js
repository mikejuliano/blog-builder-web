import React, {Component} from 'react';
import './App.css';
import {BlogBuilder} from './components/BlogBuilder';
import {config} from './configurations/auth-tutorial-01/config'; // TODO make dynamic / configurable

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Blog Builder</h1>
        </header>
        <div>
          <BlogBuilder config={ config }/>
        </div>
      </div>
    );
  }
}

export default App;

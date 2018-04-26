import React, {Component} from 'react';
import './App.css';
import {BlogBuilder} from './components/BlogBuilder';
import {config} from './configurations/auth-tutorial-01/config'; // TODO make dynamic / configurable
import {BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {

  render() {
    console.log('config', config);

    return (
      <div className="App">
        <Router>
          <Route
            path="/"
            render={ (props) => <BlogBuilder config={ config }/> }
          />
        </Router>
      </div>
    );
  }
}

export default App;





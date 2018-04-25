import React, {Component} from 'react';
import './App.css';
import {BlogBuilder} from './components/BlogBuilder';
import {config} from './configurations/auth-tutorial-01/config'; // TODO make dynamic / configurable


//const importImages = (imagePath) => {
//  const importAll = (directory) => {
//    const r = require.context(directory, true);
//    r.keys().forEach(r);
//  };
//  importAll(imagePath);
//};
//importImages('configurations/auth-tutorial-01/images');


class App extends Component {

  render() {
    console.log('config', config);

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

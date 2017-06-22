import React, { Component } from 'react';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';

import './App.css';

class App extends Component {

constructor(){
  super();
  this.state = {
    projects: []
  }
}

componentWillMount(){
  this.setState({
    projects: [
      {
        name: "Blogger Website",
        product: "Web design"
      },
      {
        name: "My Website",
        product: "Mobile"
      },
      {
        name: "Game App",
        product: "Web development"
      }
    ]
  })
}

  render() {
    return (
      <div className="App">
        <AddProject />
        <Projects myprojects={this.state.projects} />
      </div>
    );
  }
}

export default App;

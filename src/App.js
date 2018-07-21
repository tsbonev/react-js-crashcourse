import React, { Component } from 'react';
import Projects from './components/Projects';

class App extends Component {

  constructor(){
    super()
    this.state = {
      projects: [
      ]
    }
  }

  componentWillMount(){
    this.setState({projects: [
      {
        title: 'Business Website',  
        category: 'Web Design'
      },
      {
        title: 'Social App',
        category: 'Mobile Development'
      },
      {
        title: 'Ecommerece Shopping App',
        category: 'Web Development'
      }
    ]})
  }

  render() {
    return (
      <div className="App">
        My App
        <Projects projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;

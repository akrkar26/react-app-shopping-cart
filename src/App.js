import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar';
import Counters from './components/counters';

class App extends Component {

  state = {
    counters : [
      {id: 1, value: 3, name: 'Apple'},
      {id: 2, value: 1, name: 'Mango'},
      {id: 3, value: 0, name: 'Orange'},
      {id: 4, value: 2, name: 'Grapes'},
      {id: 5, value: 6, name: 'Pineapple'}
    ]
  };

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <NavBar totalItems={this.state.counters.filter(c => c.value > 0).length}></NavBar>
          <main className="container">
            <button className="btn btn-primary btn-sm m-2" onClick={this.onReset}>Reset</button>
            <Counters counters={this.state.counters}
             onAdd={this.onAdd}
             onRemove = {this.onRemove}
             >
            </Counters>
          </main>
        </header>
      </div>
    );
  }

  onAdd = (counter) => {
    
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    this.setState({counters});
  }

  onRemove = (counter) => {
    
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    if (counter.value > 0) {
      counters[index].value--;
    }
    this.setState({counters});
  }

  onReset = () => {

    const counters = this.state.counters.map(item => {
      item.value = 0;
      return item;
    });
    this.setState({counters})
  }
  
}

export default App;

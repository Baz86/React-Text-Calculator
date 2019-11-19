import React, { Component } from 'react';
import Validator from './Validator/Validator';
import Character from './Character/Character';
import './App.css';

class App extends Component {

  state = {
    word: "",
    letters: [],
    addLetter: false
  };

  changeWord = (event) => {

    this.setState({ word: event.target.value });
    var letters = [...event.target.value];
    this.setState({ letters: letters});
    this.setState({ addLetter: true });
  }

  deleteLetterHandler = (letterIndex) => {
    const letters = [...this.state.letters];
    letters.splice(letterIndex, 1);
    this.setState({letters: letters});
  }

  render() {

    let letter = null

    if(this.state.addLetter) {
      letter = (
        <div>
          {this.state.letters.map((letter, index) => {
            return <Character 
            character={letter}
            click={() => this.deleteLetterHandler(index)}
            key={index}/>
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Assignment Two</h1>
        <input type="text" onChange={this.changeWord} value={this.state.word}/>
        <p>{this.state.letters.length}</p>
        <Validator length={this.state.word.length}/>
        { letter }
      </div>
    );

  }
}

export default App;

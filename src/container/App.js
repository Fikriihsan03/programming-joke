import React from 'react';
import logo from './logo.svg';
import Content from '../component/Content'
import './App.css';

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      jokefield : ''
    }
  }

  generateQuote = () =>{
    fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single") 
    .then(resp => resp.json())
    .then(joke => this.setState({jokefield:joke.joke}))
  }
      
      
  render(){

    return (
      <div className="App">
      <header className="App-header">
        <h1>Programming Joke</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <Content  className="content"index = {this.state.jokefield}/>
        <button onClick= {this.generateQuote}>Get Joke!!</button>
      </header>
        
      </div>
  );
}
}
export default App;



import React from 'react';
import logo from './logo.svg';
import Content from '../component/Content'
import './App.css';

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      quoteField : ''
    }
  }

  generateQuote = () =>{
    fetch("https://programming-quotes-api.herokuapp.com/quotes/random") 
    .then(resp => resp.json())
    .then(joke => this.setState({quoteField:joke.en}))
  }
      
      
  render(){

    return (
      <div className="App">
      <header className="App-header">
        <h1>Programming Quote</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <Content  className="content"index = {this.state.quoteField}/>
        <button onClick= {this.generateQuote}>Get Quote!!</button>
      </header>
        
      </div>
  );
}
}
export default App;



import './App.css';
import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
       hora:new Date(),
       segundos: 0,
       pedido:""
    }
    this.iniciar=this.iniciar.bind(this);
  }
 // componentDidMount(){
   iniciar(){
     this.time = setInterval( ()=> {
      this.setState({hora : new Date(), segundos:this.state.segundos+1})
    }, 1000);
  }
  render() {
    return (
      <div className="App">
        <h2> {this.state.hora.toLocaleTimeString()} </h2>
        <p>{this.state.segundos}</p>
        <button onClick={this.inciar} > Iniciar </button>
      </div>
    )
  }
}



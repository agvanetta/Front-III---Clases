import React, { Component } from "react";


function Estadohijo(props) {
  return (
    <div>
        <h3>{props.contadorHijo}</h3>
    </div>
  )
}


// rce React Clase Estado

export class Estado extends Component {
  constructor(props) {
    // defino el constructor, con las props en caso que tenga
    super(props); // llamamos el construcor de la clase component => extends Component

    this.state = {
      // Aca creamos el objeto del estado
      contador: 0,
    };
    // setInterval(() => {
    //   this.setState({ contador: this.state.contador + 1 });
    // }, 1000);
  }
  render() {
    // metodo render
    return (
      <div>
        <h2>El Estado</h2>
        <p>{this.state.contador}</p>
        <Estadohijo contadorHijo={this.state.contador}/>
      </div>
    );
  }
}

export default Estado;

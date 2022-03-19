import React, { Component } from "react";

export default class State extends Component {
  constructor(props) {
    super(props);
    this.state = { //Esta sentencia espera un objeto literal con las variables que definira en el estado
      valor: 1,
    };
  }
/////////////////Constructor////////////////////
  incrementar() {
    this.setState({ // Funcion setState provista por React
      valor: this.state.valor + 1,
    });
/////////////////////////////
  }
  render() {
    return <button onClick={this.incrementar}></button>;
  }
}

// 1. El metodo constructor es necesario para poder definir la estrucura de un componente
// 2. La funcion super en el constructor es necesaria en React, ya que de esa forma podemos utilizar las props que hereda de su componente padre
// 3. El constructor es el unico lugar donde debemos asignar this.state directamente. Este va a ser un objeto literal
// 4. Podemos recibir las props en el constructor, es buena practica utilizarlas al llamar al super: constructuar(props)

// 5. setState: En todos los metodos que no sean el CONSTRUCTOR debemos utilizar this.setState()

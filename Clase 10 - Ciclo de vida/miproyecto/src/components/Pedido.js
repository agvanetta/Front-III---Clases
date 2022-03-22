import React, { Component } from "react";

export default class Pedido extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pedido: "",
    };
  }
  iniciar(){
      this.setState({button:false})
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        pedido: "Pizza",
      });
    }, 2000);
  }
  componentDidUpdate() {
    console.log("El componente se actualizo");
  }
  componentWillUnmount() {
    alert("Se desmonto");
  }

  render() {
    return (
      <>
        <h1>Tu Pedido: {this.state.pedido}</h1>
        <button onClick={this.iniciar.bind(this)}>Cancelar pedido</button>
      </>
    );
  }
}

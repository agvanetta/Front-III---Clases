import React, {Component} from "react";

// Funcion expresada con arrow function
//const Componente = props => <h2>{props.mensaje}</h2>

//rcf

// Componente funcional
// function Componente(props){
//     return <h2>{props.mensaje}</h2>
// }

//Componente de clase
class Componente extends Component{
    render() { // Le va a permitir renderizar codigo jsx
        return <h2>{this.props.mensaje}</h2>
    } 
}


export default Componente;
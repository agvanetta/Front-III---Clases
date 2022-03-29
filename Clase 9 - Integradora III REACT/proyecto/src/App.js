import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Componente from "./Componentes/Componente";
import Propiedades from "./Componentes/Propiedades";
import Estado from "./Componentes/Estado";
import RenderizadoCondicional from "./Componentes/RenderizadoCondicional";
import RenderElementos from "./Componentes/RenderElementos";

function App() {
  const nombres = ["Agustin", "Pupino", "Apollo", "Luca"];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p></p>
        <ul>
          {nombres.map((nombres, index) => (
            <li key={index}> {nombres} </li>
          ))}
        </ul>
        <section>
          <Componente mensaje="Hola amigos" />
          <hr></hr>
          <Propiedades
          cadena="String"
          numero={10}
          booleano={true}
          array={[1,2,3]}
          objeto={{nombre:"Jon",correo:"pupino@"}}
          />
          <hr></hr>
          <Estado/>
          <hr></hr>
          <RenderizadoCondicional/>
          <hr></hr>
          <RenderElementos/>
        </section>
      </header>
    </div>
  );
}

export default App;

//{nombres.map(  (nombres, index) => (<li key={index}>  {nombres}  </li>)  )}

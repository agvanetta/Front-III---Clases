import React from "react";
import "./titulos.css"
import Peliculas from "./components/Peliculas"
import Principal from "./components/Principal";


// import lista from "./components/lista"

 class App extends React.Component {
    render() {
      return (
        <div>
          {/* <h1 className= "title" > Personajes : </h1>
          {lista.map((elemento, index) => (
            <h1  style={{ color: "blue", textAlign:"center" }} key={index}>
              {elemento.nombre}
            </h1>
          ))} */}

          <Principal color="red" datos={Peliculas}/>

        </div>
      );
    }
  }

export default App;

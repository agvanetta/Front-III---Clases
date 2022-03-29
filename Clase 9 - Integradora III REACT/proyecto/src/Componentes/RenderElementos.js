import React, { Component } from 'react';
import data from "../Helpers/data.json";

function ElementoLista(props){
    return(
        <li> 
            <a href={props.e.web}> {props.e.name}</a>
        </li>
    )
}

export default class RenderElementos extends Component{
    constructor(props) {
        super(props);
        this.state = {
          season: ["Primavera","Verano","Otoño","Invierno"],
        };
      }
    render(){
        return(
            <div>
                <h2>Renderizado de Elementos</h2>
                <h3>Estaciones del año</h3>
                <ol>
                    {
                        this.state.season.map((element, index) => <li key={index}>{element}</li>)
                    }
                </ol>
                <h3> Frameworks Frontend JavaScript</h3>
                <ul>
                    {
                        data.frameworks.map((e,i) => (
                        <ElementoLista key={i} e={e}/>
                        ))
                    }
                </ul>
            </div>
        )
    }
}
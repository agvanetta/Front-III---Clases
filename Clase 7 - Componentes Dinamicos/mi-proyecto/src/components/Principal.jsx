import React, {Component} from "react"

class Principal extends Component {
    constructor(props){
        super(props)
        this.state={
            color:props.color
        }
        this.cambiarColor=this.cambiarColor.bind(this)
    }
    cambiarColor(){
        this.setState({
            color:"blue",
            fondo:"black"
        })
    }
    
    
    render() {
        return (
            <h1 onClick={this.cambiarColor} style={{color:this.state.color, backgroundColor:this.state.fondo}} > Mi Titulo </h1>
        )
    }
}


export default Principal
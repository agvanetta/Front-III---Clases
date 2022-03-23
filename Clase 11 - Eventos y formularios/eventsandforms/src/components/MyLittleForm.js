import React, { Component } from "react";
import Swal from "sweetalert2";
import styles from "./formDemon.module.css";

const App = () => <MyLittleForm />;

class MyLittleForm extends Component {
  state = { name: "", error: false };
  handleChange = (event) => {
    this.setState({
      name: event.target.value,
      error: false,
    });
    console.log("Has cambiado el nombre");
  };
  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.name === "") this.setState({ error: true });
    else {
      Swal.fire("Hello" + this.state.name);
      this.setState({ name: "" });
    }
  };
  render() {
    return (
      <form className={styles.styleFormDemon} onSubmit={this.handleSubmit}>
        <img
          src="https://www.racingclub.com.ar/img/futbol/plantel/1220_hauche.jpg?v=2.3"
          alt="Pony"
        />
        <label>Name</label>
        <input
          type="text"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <button type="submit">Submit!</button>
        {this.state.error && <span> This field is required</span>}
      </form>
    );
  }
}

export default App;

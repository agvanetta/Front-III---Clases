import React, { Component } from "react";

function Cripto(props) {
  return (
    <div id="Cripto">
      <img
        src="https://static.vecteezy.com/system/resources/previews/000/548/225/non_2x/cryptocurrency-and-blockchain-icons-or-logo-vector.jpg"
        alt={props.name} 
        width="40"
      />
      <span>{props.name}</span>
      <span>{props.symbol}</span>
      <span>{props.rank}</span>
      <span>{props.priceUsd}</span>
      <span>{props.changePercent24Hr}</span>
    </div>
  );
}

export default class AjaxApis extends Component {
  state = {
    criptos: [],
  };

  componentDidMount() {
    let url = "https://api.coincap.io/v2/assets";
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        //console.log(json.data);
        for (let i = 0; i < 10; i++) {
          //console.log(json.data[i].name);
          let cripto = {
            id: json.data[i].id, // key
            name: json.data[i].name,
            symbol: json.data[i].symbol,
            priceUsd: "$ "+ (Number(json.data[i].priceUsd).toFixed(2)),
            rank: json.data[i].rank,
            changePercent24Hr: Number(json.data[i].changePercent24Hr).toFixed(2)+"%",

          };
          let criptos = [...this.state.criptos, cripto];
          this.setState({ criptos });
        }
      });
  }

  render() {
    return (
      <>
        {this.state.criptos.map((el) => (
          <Cripto key={el.id} name={el.name} symbol={el.symbol} 
          rank={el.rank} priceUsd={el.priceUsd} changePercent24Hr={el.changePercent24Hr}/>
        ))}
      </>
    );
  }
}

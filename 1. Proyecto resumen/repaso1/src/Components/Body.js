import React, { Component } from 'react'

export class Body extends Component {
  render() {
    return (
      <div className="Main">
          <img className="img" alt="stock" src={this.props.url_image} height="250px" width={300} />
          <h1> {this.props.company} </h1>
          <ul>
  
              <li className="list">Market Cap : {this.props.marketCap}</li>
              <li className="list">Country : {this.props.country}</li>
              <li className="list">Ticker : {this.props.ticker}</li>
          </ul>
      </div>
    )
  }
}

export default Body
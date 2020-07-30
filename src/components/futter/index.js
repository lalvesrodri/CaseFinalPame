import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

class Futter extends React.Component {
  render() {
    return (
      <header>
        <div className="logo">
          <Link to={{ pathname: "#" }}>Fluxo</Link>
        </div>
        <div className="map">
          <li>
            <Link to={{ pathname: "/products" }}>Produtos</Link>
          </li>
          <li>
            <Link to={{ pathname: "#" }}>Whatsaap</Link>
          </li>
          <li>
            <Link to={{ pathname: "#" }}>Instagram</Link>
          </li>
          <li>
            <Link to={{ pathname: "#" }}>Facebook</Link>
          </li>
        </div>

        <div className="janela">
          <button onClick={this.changeDisplay}>Proteção ao covid</button>
          <button onClick={this.changeDisplay}>Nossa história</button>
        </div>
      </header>
    );
  }
}
export default Futter;

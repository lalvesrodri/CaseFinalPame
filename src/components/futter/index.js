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
            <Link to={{ pathname: "products" }}>Produtos</Link>
          </li>
          <li>
            <Link to={{ pathname: "#" }}>Nossa História</Link>
          </li>
          <li>
            <Link to={{ pathname: "#" }}>Vendas</Link>
          </li>
          <li>
            <Link to={{ pathname: "#" }}>duvidas</Link>
          </li>
        </div>
        <forms class="buscar">
          <div className="pesquisar">
            <input type="text" id="pesquisar" placeholder="pesquisar" />
          </div>
        </forms>
        <div className="janela">
          <button onClick={this.changeDisplay}>janela</button>
        </div>
      </header>
    );
  }
}
export default Futter;

import React from "react";
import { Link } from "react-router-dom";

import "./style.css";
import Logo from "../logo/Logo.png";
import Carrinho from "../svgs/shopping-cart.svg";

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="logo">
          <Link to={{ pathname: "/" }}>
            <img src={Logo} width="40" />
          </Link>
        </div>
        <forms class="buscar">
          <div className="pesquisar">
            <input type="text" id="pesquisar" placeholder="pesquisar" />
          </div>
        </forms>
        <div className="map">
          <li>
            <Link to={{ pathname: "/products" }}>Produtos</Link>
          </li>
          <li>
            <Link to={{ pathname: "#" }}>Nossa História</Link>
          </li>
        </div>
        <div className="Car">
          <li>
            <Link to={{ pathname: "/carrinho" }}>
              <img src={Carrinho} width="20" />
            </Link>
          </li>
        </div>

        <div className="janela">
          <button onClick={this.changeDisplay}>Login</button>
          <button onClick={this.changeDisplay}>Cadastre-se</button>
        </div>
      </header>
    );
  }
}
export default Header;

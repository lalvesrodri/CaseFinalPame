import React from "react";
import { Link } from "react-router-dom";

import "./style.css";
import Logo from "../logo/Logo.png";
import Carrinho from "../svgs/shopping-cart.svg";

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="logotipo">
          <Link to={{ pathname: "/" }}>
            <img src={Logo} width="100" />
          </Link>
        </div>
        <forms class="buscar">
          <div className="pesquisar">
            <input type="text" id="pesquisar" placeholder="pesquisar" />
          </div>
        </forms>
        <div className="mapa">
          <li>
            <Link to={{ pathname: "/products" }}>Produtos</Link>
          </li>
          <li>
            <Link to={{ pathname: "#" }}>Nossa História</Link>
          </li>

          <li>
            <Link to={{ pathname: "/carrinho" }}>
              <img src={Carrinho} width="20" />
            </Link>
          </li>
        </div>

        <div className="janela">
          <Link to={{ pathname: "/login" }}>
            <button onClick={this.changeDisplay}>Login</button>
          </Link>
          <Link to={{ pathname: "/products" }}>
            <button onClick={this.changeDisplay}>Cadastre-se</button>
          </Link>
        </div>
      </header>
    );
  }
}
export default Header;

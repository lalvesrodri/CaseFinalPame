import React from "react";
import { Link } from "react-router-dom";

import "./style.css";
import Header from "../../components/header/index";
import Futter from "../../components/futter/index";

class Cadastro extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div className="login">
          <forms className="name">
            <li>
              <input type="text" id="nome" placeholder="Nome" />
            </li>
            <li>
              <input type="text" id="E-mail" placeholder="E-mail" />
            </li>
            <input type="text" id="Senha" placeholder="Senha" />
            <li>
              <input type="text" id="Endereço" placeholder="Endereço" />
            </li>
          </forms>
          <a href="/">
            <button>Cadastre-se</button>
          </a>
        </div>
        <Futter />
      </>
    );
  }
}

export default Cadastro;

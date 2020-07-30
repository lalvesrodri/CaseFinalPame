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
            <input type="text" id="nome" placeholder="Nome" />
            <input type="text" id="E-mail" placeholder="E-mail" />
            <input type="text" id="Senha" placeholder="Senha" />
            <input type="text" id="Endereço" placeholder="Endereço" />
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

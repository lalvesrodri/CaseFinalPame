import React from "react";
import { Link } from "react-router-dom";

import "./style.css";
import Header from "../../components/header/index";
import Futter from "../../components/futter/index";

class Carrinho extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div className="tabela">
          <div className="titulo">
            <h2>Meus produtos no Carrinho</h2>
          </div>
          <div className="produtos"></div>
        </div>
        <Futter />
      </>
    );
  }
}

export default Carrinho;

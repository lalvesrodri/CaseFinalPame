import React from "react";
import { Link } from "react-router-dom";

import "./style.css";
import Header from "../../components/header/index";
import Futter from "../../components/futter/index";
import Foto from "../../components/anuncio/comprimento.jpg";

class Carrinho extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div className="tabela">
          <div className="titulo">
            <h2 className="title">Meus produtos no Carrinho</h2>
          </div>
          <div className="produtos">
            <div className="fotos">
              <img src={Foto} alt="anuncio" width="100" height="50" />
            </div>
            <div className="descricao">Texto do produto</div>
          </div>
        </div>
        <Futter />
      </>
    );
  }
}

export default Carrinho;

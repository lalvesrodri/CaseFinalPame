import React from "react";
import { Link } from "react-router-dom";

import "./style.css";
import Anuncio from "../anuncio/comprimento.jpg";

class Cartaz extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="titulo">
          <h2>Conheça nossa nova linha de bolos de rolo</h2>
        </div>
        <div className="anuncio">
          <img src={Anuncio} alt="anuncio" width="1000" height="500" />
        </div>
        <div className="info">
          <h3>Agora com entregas para todo sudeste</h3>
        </div>
      </div>
    );
  }
}
export default Cartaz;

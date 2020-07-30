import React from "react";
import { Link } from "react-router-dom";

import "./style.css";
import anuncio from "../anuncio/comprimento.jpg";

class Anuncio extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="anuncio">
          <img src={anuncio} alt="anuncio" width="1000" height="500" />
        </div>
      </div>
    );
  }
}
export default Anuncio;

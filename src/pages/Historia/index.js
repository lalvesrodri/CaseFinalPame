import React from "react";
import "./style.css";

import Header from "../../components/header/index";
import Futter from "../../components/futter/index";
import Foto from "../../components/anuncio/comprimento.jpg";

class Historia extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div className="componente">
          <div className="imagem">
            <img src={Foto} alt="anuncio" width="1000" height="500" />
          </div>
          <div className="texto">
            <h2>
              {" "}
              O bolo de rolo é uma receita típica do Recife. Apesar de ser
              bastante parecido com o tradicional rocambole, o bolo de rolo tem
              camadas mais finas de recheio e massa.
            </h2>
          </div>
        </div>

        <Futter />
      </>
    );
  }
}

export default Historia;

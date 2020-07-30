import React from "react";
import { Link } from "react-router-dom";

import "./style.css";
import ProductCard from "../../components/ProductCard/index";
import anuncio from "../../components/anuncio/comprimento.jpg";
import Header from "../../components/header/index";
import Futter from "../../components/futter/index";
import Cartaz from "../../components/anuncio/index";

class Home extends React.Component {
  /*constructor() {
    super();
    this.state = {
      Display: false,
    };
  }*/
  /*changeDisplay = () => {
    if (this.state.Display === false) {
      this.setState({ Display: true });
    } else {
      this.setState({ Display: false });
    }
  };*/
  render() {
    return (
      <>
        <Header />

        <div className="container">
          <Cartaz />

          <div className="Produto">
            <li>
              <ProductCard />
            </li>
            <li>
              <ProductCard />
            </li>
            <li>
              <ProductCard />
            </li>
            <li>
              <ProductCard />
            </li>
          </div>
        </div>
        <Futter />
      </>
      /*<div className="flutuante"  display=
      {{
      Display: display ? none : block,
       }}>

      </div>*/
    );
  }
}

export default Home;

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

        <Futter />
      </>
    );
  }
}

export default Carrinho;

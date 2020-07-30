import React from "react";
import { Link } from "react-router-dom";

import Header from "../../components/header";
import "./style.css";
import ProductCard from "../../components/ProductCard/index";
import ProductList from "../../components/ProductList/index";
import Futter from "../../components/futter/index";

class Products extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div className="anuncio">
          <ProductList />
        </div>
        <div>
          <ProductList />
        </div>
        <Futter />;
      </>
    );
  }
}

export default Products;

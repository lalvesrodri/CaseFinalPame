import React from "react";
import { Link } from "react-router-dom";

import "./style.css";
import ProductCard from "../../components/ProductCard/index";

class ProductList extends React.Component {
  render() {
    return (
      <div className="anuncio">
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
    );
  }
}

export default ProductList;

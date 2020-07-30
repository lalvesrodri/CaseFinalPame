import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

class ProductCard extends React.Component {
  render() {
    //console.log(this.props.user);
    return (
      //<Link to={`/details/${this.props.data.nome}/${this.props.data.email}`}>
      <div className="card-container">
        <div>
          <img
            className="user-picture"
            //src={this.props.data.foto}
            alt="Produto"
          />
        </div>
        <div className="information-container">
          <h2>Texto {/*this.props.data.nome*/}</h2>
          <h3>{/*this.props.data.email*/}</h3>
        </div>
      </div>
      //</Link>
    );
  }
}

export default ProductCard;

import React from "react";
import { Link } from "react-router-dom";

import "./style.css";
import Header from "../../components/header/index";
import Futter from "../../components/futter/index";

class Login extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div className="login">
          <forms className="name">
            <li>
              <input type="text" id="login" placeholder="login" />
            </li>
            <li>
              <input type="text" id="senha" placeholder="senha" />
            </li>
          </forms>
          <a href="/">
            <button>Entrar</button>
          </a>
        </div>
        <Futter />
      </>
    );
  }
}

export default Login;

import React, { Component } from 'react';
import ListaUsuarios from './usuarios';
import hoc from "../components/hco";

const HoclistaUsuarios = hoc(ListaUsuarios);

class App extends Component {

  render() {
    return (
      <div className="container">
        <div className="row">
        {
          React.createElement(HoclistaUsuarios)
        }
        </div>
      </div>
    );
  }
}

export default App
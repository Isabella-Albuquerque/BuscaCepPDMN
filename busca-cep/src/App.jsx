import React, { Component } from 'react';
import Busca from './Busca';
import LocalidadeLista from './LocalidadeLista';

class App extends Component {
  state = {
    termoDeBusca: '',
  };

  buscarLocalidade = (cep) => {
    this.setState({ termoDeBusca: cep });
  };

  render() {
    return (
      <div className="grid justify-content-center">
        <div className="col-12">
          <h1 className="text-center">Buscador de CEPs</h1>
        </div>
        <div className="col-12">
          <Busca onBuscar={this.buscarLocalidade} />
        </div>
        <div className="col-12">
          <LocalidadeLista cep={this.state.termoDeBusca} />
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Busca from './Busca';

class App extends Component {
  render() {
    return (
      <div className="grid justify-content-center">
        <div className="col-12">
          <h1 className="text-center">Buscador de CEPs</h1>
        </div>
        <div className="col-12">
          <Busca />
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react'
import Busca from './components/Busca'
import axios from 'axios'
import LocalidadeLista from './components/LocalidadeLista'
import Grafico from './components/Grafico'

class App extends Component {

  state = {
    termoDeBusca: '',
    consultas: []
  }

  buscarLocalidade = (cep) => {
    this.setState({ termoDeBusca: cep })
  }

  onBuscarClick = (cep) => {
    if (cep === '') {
      alert('Busca vazia. Insira um CEP.')
      return
    }

    if (cep.length !== 8) {
      alert('Insira um CEP com 8 dígitos.')
      return
    }

    axios.get(`https://viacep.com.br/ws/${cep}/json/`)
      .then((response) => {
        const objetoRetorno = response.data
        if (objetoRetorno.erro) {
          alert('CEP não localizado na base.')
          console.log(objetoRetorno)
          return
        }
        this.setState((state) => ({
          consultas: [objetoRetorno].concat(state.consultas)
        }))
      })
      .catch((error) => {
        console.error(error)
        alert('Ocorreu um erro ao realizar a busca.')
      })
  }

  render() {
    return (
      <div className="grid justify-content-center p-2">
        <div className="col-12">
          <h1 className="text-center">Buscador de CEPs</h1>
        </div>
        <div className="col-12">
          <Busca
            dica='Informe o CEP com 8 dígitos'
            onBuscarClick={this.onBuscarClick} />
        </div>
        <div className="col-12">
          <div className="grid">
            <div className="col-6">
              <LocalidadeLista consultas={this.state.consultas} />
            </div>
            <div className="col-6">
              <Grafico consultas={this.state.consultas} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
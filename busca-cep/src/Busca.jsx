import React, { Component } from 'react'
import { IconField } from 'primereact/iconfield'
import { InputIcon } from 'primereact/inputicon'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'

class Busca extends Component {
  state = {
    termoDeBusca: '',
  }

  onTermoAlterado = (event) => {
    const valor = event.target.value.replace (/\D/g, '')
    this.setState({ termoDeBusca: valor })
  }
  
  onFormSubmit = (event) => {
    event.preventDefault()  
    this.props.onBuscarClick(this.state.termoDeBusca)
} 

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div 
          className="flex flex-column gap-3">
            <IconField iconPosition="left">
            <InputIcon className="pi pi-search" />
            <InputText
              className="w-full"
              placeholder={this.props.dica}
              onChange={this.onTermoAlterado}
              value={this.state.termoDeBusca}/>
          </IconField>
          <Button
            label="Buscar"
            className="p-button-outlined"
          />
        </div>
      </form>
    )
  }
}

export default Busca

Busca.defaultProps = {
  dica: 'Buscar CEP...',
}
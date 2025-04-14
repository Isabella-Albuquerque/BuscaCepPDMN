import React, { Component } from 'react';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

class Busca extends Component {
  state = {
    termoDeBusca: '',
  };

  onTermoAlterado = (event) => {
    this.setState({ termoDeBusca: event.target.value });
  };

  onBuscarClick = () => {
    const { termoDeBusca } = this.state;
    if (termoDeBusca.match('04094050') || termoDeBusca.match('55592970')) {
      this.props.onBuscar(termoDeBusca);
    } else {
      return null;
    }
  };

  render() {
    return (
      <div className="flex flex-column gap-3">
        <IconField iconPosition="left">
          <InputIcon className="pi pi-search" />
          <InputText
            className="w-full"
            placeholder={this.props.dica}
            onChange={this.onTermoAlterado}
            value={this.state.termoDeBusca}
          />
        </IconField>
        <Button
          label="Buscar"
          className="p-button-outlined"
          onClick={this.onBuscarClick}
        />
      </div>
    );
  }
}

export default Busca

Busca.defaultProps = {
  dica: 'Buscar CEP...',
};

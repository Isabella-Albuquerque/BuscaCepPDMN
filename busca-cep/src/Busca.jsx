import React, { Component } from 'react';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';


export default class Busca extends Component {
    state = {
        termoDeBusca: '',
    };

    onTermoAlterado = (event) => {
        this.setState({ termoDeBusca: event.target.value });
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
                    onClick={() => alert(`Você digitou o CEP:  ${this.state.termoDeBusca}`)}
                />
            </div>
        );
    }
}

Busca.defaultProps = {
    dica: 'Buscar cep...',
};

import React from 'react'
import { Card } from 'primereact/card'

const LocalidadeLista = ({ cep }) => {
  const localPorCEP = {
    '04094050': { nome: 'Avenida Pedro Álvares Cabral', bairro: 'Parque Ibirapuera', cidade: 'São Paulo', estado: 'SP', cep: '04094-050' },
    '55592970': { nome: 'Rua dos Navegantes', bairro: 'Vila de Porto de Galinhas', cidade: 'Ipojuca', estado: 'PE', cep: '55592-970' },
    '': {}, 
  };

  const infoLocal = localPorCEP[cep]

  return (
    <div className="flex flex-column align-items-center justify-content-center w-full">
      <Card className="w-full">
        <p className="m-0 text-center">{infoLocal.cep}</p>
        <p className="m-0 text-center">{infoLocal.nome}</p>
        <p className="m-0 text-center">{infoLocal.bairro}</p>
        <p className="m-0 text-center">
          {infoLocal.cidade} - {infoLocal.estado}
        </p>
      </Card>
    </div>
  )
}
export default LocalidadeLista
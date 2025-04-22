import React from 'react'
import { Card } from 'primereact/card'

const LocalidadeLista = ({ localidade }) => {

  return (
    <div className="flex flex-column align-items-center justify-content-center w-full">
      {localidade.map((info) => (
      <Card className="w-full">
        <p className="m-0 text-center">{info.cep}</p>
        <p className="m-0 text-center">{info.logradouro}</p>
        <p className="m-0 text-center">{info.bairro}</p>
        <p className="m-0 text-center">
          {info.localidade} - {info.uf}
        </p>
      </Card>
      ))}
    </div>
  )
}
export default LocalidadeLista
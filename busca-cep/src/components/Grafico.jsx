import React from 'react'
import { Chart } from 'primereact/chart'

const Grafico = ({ consultas }) => {
    const contagem = {}

    for (let i = 0; i < consultas.length; i++) {
        const estado = consultas[i].uf
        contagem[estado] = contagem[estado] ? contagem[estado] + 1 : 1
    }

    const data = {
        labels: Object.keys(contagem),
        datasets: [{
            data: Object.values(contagem),
            backgroundColor: [
                '#EF5350', '#EC407A', '#AB47BC', '#7E57C2', '#5C6BC0',
                '#42A5F5', '#26C6DA', '#26A69A', '#66BB6A', '#9CCC65',
                '#D4E157', '#FFEE58', '#FFCA28', '#FFA726', '#FF7043'
            ],
            hoverBackgroundColor: [
                '#E57373', '#F06292', '#BA68C8', '#9575CD', '#7986CB',
                '#64B5F6', '#4DD0E1', '#4DB6AC', '#81C784', '#AED581',
                '#DCE775', '#FFF176', '#FFD54F', '#FFB74D', '#FF8A65'
            ]
        }]
    }

    return (
        <div className="flex justify-content-center w-full">
            <div className="w-full md:w-30rem">
                {consultas.length > 0 && <h3>Buscas por estado</h3>} 
                <Chart type="pie" data={data} />
            </div>
        </div>
    )
}

export default Grafico

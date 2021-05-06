import './App.css'

import React from 'react'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'

export default () =>
    <div id="App">
        <h1>Fundamentos React</h1>
        <div className="Cards">
            <Card titulo="#04 - Desafio Aleatório" color="#FF6B82">
                <Aleatorio Min={1} Max={10} />
            </Card>
            <Card titulo="#03 - Fragmento" color="#94D0FF">
                <Fragmento />
            </Card>
            <Card titulo="#02 - Com Parâmetro" color="#FFCD26">
                <ComParametro
                    titulo="Situação do aluno"
                    aluno="José"
                    nota={7.5} />
                <ComParametro
                    titulo="Situação do aluno"
                    aluno="Maria"
                    nota={6.5} />
            </Card>
            <Card titulo="#01 - Primeiro" color="#CDABF9">
                <Primeiro></Primeiro>
            </Card>
        </div>
    </div>
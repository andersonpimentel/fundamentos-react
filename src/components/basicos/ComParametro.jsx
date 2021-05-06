import React from 'react'

export default function ComParametro(props) {
    const situacao = props.nota >= 7 ? 'Aprovado' : 'Reprovado';
    return (
        <div>
            <h2>{props.titulo}</h2>
            <h3>{props.aluno} tem nota {props.nota} ({situacao})</h3>
        </div>
    );
}
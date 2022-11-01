import React from 'react'
import styled from 'styled-components'

const Div=styled.div`
    width: 300px;
    background-color: #00ac1a;
    margin: 5px;
    border-radius: 10px;
`

const Curso = ({nombre, numero, info}) => {
    return (
        <Div>
            <h1>{nombre}</h1>
            <h2>El curso numero {numero}</h2>
            <p>{info}</p>
        </Div>
    );
};

export default Curso;
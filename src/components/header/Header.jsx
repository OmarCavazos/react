import React from 'react'
import styled from 'styled-components'

const HeaderStyle = styled.header`
    display: flex;
    justify-content: space-between;
    width: 100vw;
    height: 10vh;
    background-color: #009191;
`

function Header({titulo, children}) {
    return (
        <HeaderStyle>
            <h1>{titulo}</h1>
            {children[0]}
            {children[1]}
            {children[2]}
        </HeaderStyle>
    )
}

export default Header;
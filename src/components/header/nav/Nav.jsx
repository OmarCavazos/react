import React from 'react'
import styled from 'styled-components'

const NavStyle = styled.nav`
a{
    padding: 10px;
    text-decoration: none;
    color: darkcyan;
}    
`

function Nav() {
    return (
        <NavStyle>
            <a href="/">link</a>
            <a href="/">link</a>
            <a href="/">link</a>
            <a href="/">link</a>
        </NavStyle>
    )
}

export default Nav
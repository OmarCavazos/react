import React from 'react'
import styled from 'styled-components'

const Nav = styled.nav`
    a{
        text-decoration: none;
        padding: 1rem;
    }
`

const NavContainer = () => {
    return (
        <Nav>
            <a href="/">link</a>
            <a href="/">link</a>
            <a href="/">link</a>
            <a href="/">link</a>
            <a href="/">link</a>
        </Nav>
    );
};

export default NavContainer;
import React from 'react'
import styled from 'styled-components'

import NavContainer from './NavContainer'

const Footer = styled.footer`
    height: 10vh;
    background-color: #264dc3;
`;

const FooterContainer = () => {
    return (
        <Footer>
            footer
            <NavContainer />
        </Footer>
    );
};

export default FooterContainer;
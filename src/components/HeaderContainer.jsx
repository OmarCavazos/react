import React from "react";
import styled from "styled-components";

import NavContainer from "./NavContainer";

const Header = styled.header`
    height: 10vh;
    background-color: #bf11cb;
`;

const HeaderContainer = () => {
    return(
        <Header>
            Header
            <NavContainer/>
        </Header>
    );
};

export default HeaderContainer;

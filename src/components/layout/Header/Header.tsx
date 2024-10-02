import React, {ReactNode} from 'react';
import styled from "styled-components";
import {HeaderTop} from "./headerTop/HeaderTop";
import {HeaderBottom} from "./headerBottom/HeaderBottom";
import {Container} from "../../container/Container";

type PropsType = {

}
export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <HeaderTop/>
                <HeaderBottom />
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.div`
  position: absolute;
  z-index: 1000;
  width: 100%;
  top: 0;
  left: 0;
  padding-right: 2rem;
  padding-left: 2rem;
`

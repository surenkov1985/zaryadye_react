import React, {ReactNode} from 'react';
import styled from "styled-components";

type PropsType = {
    children: ReactNode
}
export const Container = ({children}:PropsType) => {
    return (
        <StyledContainer>
            {children}
        </StyledContainer>
    );
};

const StyledContainer = styled.div`
  width: 100%;
  max-width: 1792px;
  margin-left: auto;
  margin-right: auto;
`
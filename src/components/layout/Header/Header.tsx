import React, {ReactNode} from 'react';
import styled from "styled-components";

type PropsType = {
    children: ReactNode
}
export const Header = ({children}:PropsType) => {
    return (
        <div>
            {children}
        </div>
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

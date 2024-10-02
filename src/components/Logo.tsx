import React from 'react';
import {Icon} from "./Icon";
import IconPath from "../assets/img/icons/sprite.svg";
import styled from "styled-components";

type LogoPropsType = {
    type: 'light' | "dark"
}
export const Logo = ({type}:LogoPropsType) => {
    return (
        <div>
            <StyledLogo href="/" className="logo head__logo dark-logo">
                {
                    type === 'dark'
                        ?
                        <Icon width='115' height='85' viewBox="0 0 115 84.9999" id={`${IconPath}#logo`} />
                        :
                        <Icon width='154' height='113' viewBox="0 0 153.342 113" id={`${IconPath}#lightLogo`} />
                }

            </StyledLogo>
        </div>
    );
};

const StyledLogo = styled.a`
  display: flex;
  height: 113px;
  margin-left: -2rem;

  & svg {
    width: 100%;
    height: 100%;
  }
`


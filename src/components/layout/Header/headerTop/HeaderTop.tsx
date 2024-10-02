import React from 'react';
import {Icon} from "../../../Icon";
import IconPath from "../../../../assets/img/icons/sprite.svg";
import {S} from "./HeaderTopStyles";


export const HeaderTop = () => {
    return (
        <S.StyledHeaderTop className="head__top d-flex align-end justify-between">
            <a href="/" className="logo depkult-logo">
                <Icon width="214.000000" height="46.000000" viewBox="0 0 214 46" id={`${IconPath}#depkultLogo`} />
                <Icon width="214.000000" height="46.000000" viewBox="0 0 214 46" id={`${IconPath}#depkultLogoLight`} />
            </a>
            <a href="/" className="links__item search">
                <Icon width="19.667969" height="19.667236" viewBox="0 0 19.668 19.6672" id={`${IconPath}#search`} />
            </a>
        </S.StyledHeaderTop>
    );
};
import React from 'react';
import {Icon} from "../../../Icon";
import IconPath from "../../../../assets/img/icons/sprite.svg";
import { S } from './HeaderBottomStyles';
import {Logo} from "../../../Logo";
import {Dropdown, DropItemType} from "../../../Dropdown";

export const HeaderBottom = () => {

    const languages:Array<DropItemType> = [
        {value: '/ru/', text: 'RU'},
        {value: '/en/', text: 'EN'},
        {value: '/fr/', text: 'FR'},
    ]

    return (
        <S.StyledHeaderBottom className="head__bottom">
            {/*<div className="row align-start">*/}
                <div className="head__left  col col-5">
                    <div className="head__left_content max991">
                        <a href="" className="links__item">
                            <Icon width="25.666016" height="25.055908" viewBox="0 0 25.666 25.0559" id={`${IconPath}#cart`} />
                        </a>
                    </div>
                    <div className="head__left_content min991">
                        <a href="/" className="logo depkult-logo">
                            <Icon width="214.000000" height="46.000000" viewBox="0 0 214 46" id={`${IconPath}#depkultLogo`} />
                            <Icon width="214.000000" height="46.000000" viewBox="0 0 214 46" id={`${IconPath}#depkultLogoLight`} />
                        </a>
                        <div className="head__left_controls">
                            <div className="links">
                                <a href="/" className="links__item search">
                                    <Icon width="19.667969" height="19.667236" viewBox="0 0 19.668 19.6672" id={`${IconPath}#search`} />
                                </a>
                                <a href="" className="links__item">
                                    <Icon width="25.669922" height="20.471924" viewBox="0 0 25.6699 20.4719" id={`${IconPath}#eye`} />
                                </a>

                                <a href="" className="links__item">
                                    <Icon width="27.666016" height="25.000000" viewBox="0 0 27.666 25" id={`${IconPath}#subscribe`} />
                                </a>
                            </div>
                            <div className="links">
                                <a href="" className="links__item">
                                    <Icon  width="20.119141" height="25.541260" viewBox="0 0 20.1191 25.5413" id={`${IconPath}#user`} />
                                </a>
                                <a href="" className="links__item">
                                    <Icon width='25' height='25' viewBox="0 0 25.666 25.0559" id={`${IconPath}#cart`} />
                                </a>
                            </div>
                            <button className="btn btn_menu">
                          <span className="lines">
                              <span className="line line-1"></span>
                              <span className="line line-2"></span>
                              <span className="line line-3"></span>
                          </span>
                            </button>
                        </div>

                    </div>
                </div>
                <div className="head__center col col-2 d-flex justify-center">
                <Logo type={"dark"} />
                </div>
                <div className="head__right col col-5">
                    <div className="head__right_content max991">
                        <button className="btn btn_menu">
                        <span className="lines">
                            <span className="line line-1"></span>
                            <span className="line line-2"></span>
                            <span className="line line-3"></span>
                        </span>
                        </button>
                    </div>
                    <div className="head__right_content min991">
                        <nav className="head__nav">
                            <ul className="head__nav_list">
                                <li className="head__nav_item"><a href="/events/" className="nav-link">Афиша</a>
                                </li>
                                <li className="head__nav_item"><a href="/o-zale/" className="nav-link">О зале</a>
                                </li>
                                <li className="head__nav_item"><a href="/zritelyam/" className="nav-link">Зрителям</a>
                                </li>
                                <li className="head__nav_item"><a href="/contacts/" className="nav-link">Контакты</a>
                                </li>
                            </ul>
                        </nav>
                        <div className="head__languages ">
                            <Dropdown values={languages} />
                            {/*<div className="head__languages_dropdown dropdown dropdown-light">*/}
                            {/*    <div className="dropdown__value"><span className="value">En</span></div>*/}
                            {/*    <div className="dropdown__list">*/}
                            {/*        <div className="dropdown__item">*/}
                            {/*            <a href="/ru/" className="value">Ru</a>*/}
                            {/*        </div>*/}
                            {/*        <div className="dropdown__item">*/}
                            {/*            <a href="/fr/" className="value">Fr</a>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
            {/*</div>*/}
        </S.StyledHeaderBottom>
    );
};
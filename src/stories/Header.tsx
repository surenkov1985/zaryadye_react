import React from 'react';
import IconPath from './../assets/img/icons/sprite.svg'
import { Button } from './Button';
import './header.css';
import {Icon} from "../components/Icon";
import {Container} from "../components/container/Container";
import {Header} from "../components/layout/Header/Header";

type User = {
  name: string;
};

export interface HeaderProps {
  user?: User;
  onLogin?: () => void;
  onLogout?: () => void;
  onCreateAccount?: () => void;
}

export const HeaderStories = ({ user, onLogin, onLogout, onCreateAccount }: HeaderProps) => (
  <Header>
    <Container>
      <div className="head__top d-flex align-end justify-between">
        <a href="/" className="logo depkult-logo">
          <Icon width="214.000000" height="46.000000" viewBox="0 0 214 46" id={`${IconPath}#depkultLogo`} />
          <Icon width="214.000000" height="46.000000" viewBox="0 0 214 46" id={`${IconPath}#depkultLogoLight`} />
        </a>
        <a href="/" className="links__item search">
          <Icon width="19.667969" height="19.667236" viewBox="0 0 19.668 19.6672" id={`${IconPath}#search`} />
        </a>
      </div>
      <div className="head__bottom">
        <div className="row align-start">
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
            <a href="" className="logo head__logo dark-logo">
              <Icon width='115' height='85' viewBox="0 0 115 84.9999" id={`${IconPath}#logo`} />
            </a>

            <a href="" className="logo head__logo light-logo">
              <Icon width='154' height='113' viewBox="0 0 153.342 113" id={`${IconPath}#lightLogo`} />
            </a>
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
                <div className="head__languages_dropdown dropdown dropdown-light">
                  <div className="dropdown__value"><span className="value">En</span></div>
                  <div className="dropdown__list">
                    <div className="dropdown__item">
                      <a href="/ru/" className="value">Ru</a>
                    </div>
                    <div className="dropdown__item">
                      <a href="/fr/" className="value">Fr</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </Header>
);

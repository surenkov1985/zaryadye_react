import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./components/layout/Header/Header";
import {Icon} from "./components/Icon";
import IconPath from "./assets/img/icons/sprite.svg";
import {Container} from "./components/container/Container";
import {HeaderTop} from "./components/layout/Header/headerTop/HeaderTop";
import {dark, light} from "./assets/styles/Theme.styled";
import {ThemeProvider} from "styled-components";
import {GlobalStyles} from "./assets/styles/GlobalStyles";
import {HeaderBottom} from "./components/layout/Header/headerBottom/HeaderBottom";
import {DropItemType} from "./components/Dropdown";

function App() {
  const defaultTheme = 'light'
  const [theme, setTheme] = useState(defaultTheme)



  return (
      <ThemeProvider theme={theme === 'light' ? light : dark}>
        <div className="App">
          <Header/>
        </div>
        <GlobalStyles/>
      </ThemeProvider>

  );
}

export default App;

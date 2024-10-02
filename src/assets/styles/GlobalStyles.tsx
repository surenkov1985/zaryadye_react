import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html,
    body,
    div,
    span,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    a,
    b,
    u,
    i,
    ol,
    ul,
    li,
    form,
    label,
    caption,
    article,
    footer,
    header,
    nav,
    section,
    audio,
    video {
        margin: 0;
        padding: 0;
        font-size: 100%;
        vertical-align: baseline;
    }

    html {
        scroll-behavior: smooth;
    }

    address {
        font-style: normal;
    }

    a {
        text-decoration: none;
        -webkit-tap-highlight-color: transparent;
        -webkit-touch-callout: none;
    }

    ul,
    li,
    img {
        list-style-type: none;
        margin: 0;
        padding: 0;
        -webkit-touch-callout: none;
        -webkit-tap-highlight-color: transparent;
    }

    img {
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-size: 100%;
        font-weight: normal;
    }

    html {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }

    *,
    *:before,
    *:after {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
    }

    img,
    audio,
    video {
        max-width: 100%;
        height: auto;
    }

    audio,
    iframe,
    video,
    img,
    svg {
        vertical-align: middle;
    }

    iframe {
        border: 0;
    }

    textarea {
        resize: none;
        /*remove the resize handle on the bottom right*/
        overflow: auto;
        vertical-align: top;
        box-shadow: none;
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
    }

    input,
    textarea,
    select,
    button,
    label,
    div {
        outline: none;
        border: none;
            font-size: 100%;
        margin: 0;
        padding: 0;
        -webkit-tap-highlight-color: transparent;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    textarea,
    button,
    input {
        line-height: normal;
        background: none;
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    textarea:-webkit-autofill,
    textarea:-webkit-autofill:hover,
    textarea:-webkit-autofill:focus,
    select:-webkit-autofill,
    select:-webkit-autofill:hover,
    select:-webkit-autofill:focus {
        border: none;
        outline: none !important;
        background: rgba(255, 255, 255, 0);
        transition: all 5000s ease-in-out;
    }

    input:active,
    input:focus,
    textarea:-webkit-autofill,
    textarea:-webkit-autofill:hover,
    textarea:-webkit-autofill:focus,
    select:-webkit-autofill,
    select:-webkit-autofill:hover,
    select:-webkit-autofill:focus {
        border: none;
        outline: none !important;
    }


    html {
        font-size: var(--font-size);
    }

    body {
        position: relative;
        width: 100%;
        min-height: 100vh;
        min-width: 320px;
        margin: 0;
        overflow-x: hidden;
        color: #666666;
        font-size: var(--font-size);
        font-family: var(--font-accent);
        background: var(--clr-white);
        scroll-behavior: smooth;

    }

    a {
        color: var(--clr-black);
        text-decoration: none;
    }

    ::selection {
        color: #fff;
        // background-color: var(--clr-accent);
    }

    :focus {
        outline: none !important;
    }

    input,
    textarea,
    button,
    select,
    a {
        margin: 0;
        padding: 0;
        border: none;
        outline: none !important;
        font-size: 1em;
        font-family: inherit;
        background: none;
        box-shadow: none;
    }

    input,
    button,
    select {
        line-height: 1;
    }

    input[type=number] {
        -moz-appearance: textfield;
    }

    input[type=number]::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }

    *[class$=__media] {
        flex-shrink: 0;
    }

    ul {
        list-style: none;
    }

    button {
        cursor: pointer;
    }

    * {
        -webkit-tap-highlight-color: transparent !important;
    }

    textarea {
        overflow: auto;
        resize: none;
    }

    article,
    aside,
    dialog,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    main,
    nav,
    section,
    form {
        display: block;
    }

    main {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex-grow: 1;
        /* gap: var(--main-content-gap); */
    }

    * {
        box-sizing: border-box;
    }

    *::before,
    *::after {
        box-sizing: border-box;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin-top: 0;
        margin-bottom: 0;
    }

    body {
        margin: 0;
        font-family: "Poppins",
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
    }

    * {
        box-sizing: border-box;
        font-family: "Poppins",
            sans-serif;
      line-height: 1.23;

      @media (prefers-reduced-motion: reduce) {
        animation: none;
      }

    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }

    #root {
        width: 100%;
        height: 100%;
        min-height: 100vh;
    }
    .hidden {
      overflow: hidden;
    }
    .row {
      display: flex;
      margin-left: -1rem;
      margin-right: -1rem;
    }

    .col {
      width: 4.1666666667%;
      padding-left: 1rem;
      padding-right: 1rem;
    }

    .col-2 {
      width: 16.6666666667%;
    }

    .col-3 {
      width: 25%;
    }

    .col-4 {
      width: 33.3333333333%;
    }

    .col-5 {
      width: 41.6666666667%;
    }

    .col-6 {
      width: 50%;
    }
    
    .max991 {
      display: none !important;
    }
    .min991 {
      display: flex !important;
    }

    @media screen and (max-width: 991px) {
      .max991 {
        display: flex !important;
      }
      .min991 {
        display: none !important;
      }
    }
`;


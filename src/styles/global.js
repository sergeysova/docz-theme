import { css, injectGlobal } from 'emotion'

import haskligLight from '../../public/Hasklig-Light.otf'
import haskligLightItalic from '../../public/Hasklig-LightIt.otf'

const selection = css`
  background: blue;
  color: white;
`

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Helvetica');

  @font-face {
    font-family: 'hasklig';
    font-style: normal;
    font-weight: 400;
    src: url(${haskligLight}) format('truetype');
  }

  @font-face {
    font-family: 'hasklig';
    font-style: italic;
    font-weight: 400;
    src: url(${haskligLightItalic}) format('truetype');
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }

  ::-moz-selection {
    ${selection}
  }

  ::selection {
    ${selection}
  }

  body {
    margin: 0;
    padding: 0;
    font-family: Helvetica, sans-serif;
    font-size: 16px;
    font-weight: 300;
    line-height: 1.62;
    background: white;
    overflow: hidden;
  }

  html, body, #root {
    height: 100vh;
    min-height: 100vh;
  }

  a, a:visited, a:active {
    text-decoration: none;
    color: blue;
  }

  a:hover {
    color: blue;
  }

  input:required, input:invalid {
    box-shadow: none;
  }

  button:focus {
    outline: none !important;
  }

  select {
    color: black;
  }

  pre, code {
    font-family: 'hasklig', 'Fira Code', monospace;
  }
`


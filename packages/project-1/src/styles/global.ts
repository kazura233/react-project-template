import { css, createGlobalStyle } from 'styled-components'

const style = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    height: 100%;
    width: 100%;
  }
`

export const GlobalStyle = createGlobalStyle`
  ${style}
`

import { createGlobalStyle } from 'styled-components'

export const cores = {
  corTexto: '#E66767',
  corFundo: '#F5F5F5',
  corFundoCards: '#FFFFFF',
  corRodape: '#FFEBD9'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
    }

    body {
    background-color: ${cores.corFundo};
    color: ${cores.corTexto};
    padding-top: 40px;
}
    .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    }
`

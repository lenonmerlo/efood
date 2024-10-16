import { createGlobalStyle } from 'styled-components'

export const cores = {
  corTexto: '#E66767', // Cor de texto
  corFundo: '#FFF8F2', // Cor do fundo da página
  corFundoCards: '#FFFFFF', // Cor de fundo dos cards
  corBotao: '#E66767', // Cor do botão
  corBotaoClicado: '#c0392b',
  corTextoBotao: '#FFEBD9', // Cor do texto do botão
  corRodape: '#FFEBD9', // Cor do rodapé
  corRating: '#f39c12', // Cor do rating
  corFundoCardPage: '#E66767',
  corBotaoPage: '#FFEBD9',
  corTextoBotaoPage: '#E66767',
  corTextoPage: '#FFEBD9'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    color: ${cores.corTexto};
    }

    body {
    background-color: ${cores.corFundo};
    color: ${cores.corTexto};
    font-family: Roboto, sans-serif;

}
    .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    }
`

import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #f0f2f5;
    --red: #E52E4D;
    --blue: #5429CC;
    --blue-light: #6933FF;
    --text-title: #363F5F;
    --text-body: #969CB3;
    --background: #F0F2F5;
    --shape: #FFFFFF;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  // font-size: 16px; // tamanho padrao para desktop
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 16px x 0,9375 = 15 pixels
    }
    @media (max-widht: 720px) {
      font-size: 87.5%; // 15x 0,875 = 14 pixels
    }
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400; // tamanho padrao dela e no html = 500
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  // REM = 1rem = font-size = 15 pixes ou 14 pixels dependendo do dispositivo
  // ótima prática, pois tudo se adaptará ao tamanho do dispositivo
  // o legal de usar % ao invés de pixel direto, vai influenciar o lance do tamanho da fonte que o usuário vai utilizar

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased; //deixa as fontes nítidas
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed; // placa de nao-permitido
  }
`

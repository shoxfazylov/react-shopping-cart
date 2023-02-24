import { css } from '@emotion/react'

import { resetStyles } from './resetStyles'
import { variablesStyles } from './variables'
import { npgrogressStyles } from './nprogress'

export const globalStyles = css`
  ${resetStyles}
  ${variablesStyles}
  ${npgrogressStyles}

  body {
    font-family: 'TTCommons', sans-serif;
    font-size: 16px;
    color: var(--color-black);
    background: #f9f9fb;
    text-rendering: optimizeLegibility;
    text-decoration-skip: objects;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: transparent;
  }

  html,
  #__next,
  body {
    min-height: 100vh;
  }

  #__next {
    scroll-behavior: smooth;
  }

  a {
    display: flex;
    color: var(--color-black);
    text-decoration: none;
  }
`

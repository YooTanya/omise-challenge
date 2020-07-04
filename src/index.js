import React from 'react';
import { createGlobalStyle } from 'styled-components'
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { store } from './store';
import App from './App';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    font-family: 'Notable', sans-serif;
  }
`
render(<Provider store={store}> <GlobalStyle /><App /></Provider>,
  document.getElementById('root'),
);

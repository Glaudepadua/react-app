import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from 'theme';

ReactDOM.render(
  <React.StrictMode>
    {/* theme={theme} => {...{ theme }}
    quando repete o nome da propriedade, abre o objeto passa um square operator e fica ->  {...{ theme }} */}
    <ThemeProvider {...{ theme }}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

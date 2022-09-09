import React from "react";
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import {Button, TextField} from '@material-ui/core';
import { blue } from "@material-ui/core/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: blue[500]
    }
  },
  props: {
    MuiTextField: {
      variant: 'outlined',
      fullWidth: true
    },
    MuiSelect: {
      variant: 'outlined',
      fullWidth: true
    }
  }
});

const App = () => (
  <ThemeProvider theme={theme}>
    <h1>Aplicação React</h1>

    <Button variant="contained">Default</Button>
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Button variant="contained" color="secondary">
        Secondary
      </Button>

      <TextField/>
  </ThemeProvider>
)

export default App;
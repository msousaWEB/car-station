import React from "react";
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { blue } from "@material-ui/core/colors";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaUser} from 'react-icons/fa'

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
    <h1 className="text-danger">Aplicação React</h1>
    <FaUser style={{fontSize: '40px', color: 'red'}}/>
  </ThemeProvider>
)

export default App;
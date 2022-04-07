import React from 'react';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import NavigaBar from './components/NavigaBar'
import './App.css';

const theme = createMuiTheme({
  palette:{
    primary:{
      main:"#99e6ff",
    },
    secondary:{
      main:"#99ccff",

    },
  },
  typography:{
    fontFamily: [
      'Roboto'
    ],
    h4: {
      fontWeight: 600,
      fontSize:28,
      lineHeight: '2rem',
    },
  },
});

function App(){
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <NavigaBar/>
      </ThemeProvider>
    </div>
  );
}

export default App;

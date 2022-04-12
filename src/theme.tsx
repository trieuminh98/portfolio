import { createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
    background: {
      default: '#FAFDD6',
    },
  },
  components: { 
    // Name of the componentsss
    // MuiTypography: {
    //   styleOverrides: {
    //     // Name of the slot
    //     root: {
    //       // Some CSS
    //       fontSize: '0.8rem',
    //       color: 'inherit'
    //     },
    //   },
    // },
  },
});

export default theme;
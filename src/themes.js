import { createTheme } from '@mui/material/styles';

const raleway =  "'Raleway', sans-serif";
const gaegu = "'Gaegu', serif";

const theme = createTheme();

theme.palette.primary = {
      light: '#DD99BB',
      main: '#FFFFFF',
      dark: '#6D466B',
      contrastText: '#241909',
    
} 

theme.typography.h2 = {
  color: '#F9C80E',
  fontFamily: gaegu,
  fontWeight: 800,
  textAlign: 'center',
  [theme.breakpoints.up('xs')]: {
    fontSize: '2.3rem',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '3rem',
    color: 'green',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '5.2rem',
    color: 'blue',
  },
}

theme.typography.h3 = {
  color: '#A50104',
  fontFamily: raleway,
  fontWeight: 400,
  // letterSpacing: '.75rem',
  textAlign: 'center',
    [theme.breakpoints.up('xs')]: {
    fontSize: '1rem',
    letterSpacing: '.4rem',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '3rem',
    color: 'green',
  },
  [theme.breakpoints.up('md')]: {
    fontWeight: 400,
    fontSize: '2rem',
    letterSpacing: '1.1rem',
  },
  //     '@media (max-width:380px)': {
  //   fontSize: '.25rem',
  //   letterSpacing: '.5rem',
  // },
  // '@media (max-width:450px)': {
  //   fontSize: '1rem',
    
  // },
}

theme.typography.h4 = {
  color: '#6D466B',
  fontFamily: raleway,
  fontWeight: 800,
  fontSize: '1rem',
  textAlign: 'left',
  // '@media (min-width:300px)': {
  //   fontSize: '.75rem',
  // },
  [theme.breakpoints.down('md')]: {
    fontWeight: 800,
  fontSize: '1rem',
  letterSpacing: '.1rem',
  },
}

export default theme;
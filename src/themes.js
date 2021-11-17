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
    fontSize: '4.6rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '5.2rem',
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
    fontSize: '1.5rem',
    letterSpacing: '.75rem',
  },
  [theme.breakpoints.up('md')]: {
    fontWeight: 400,
    fontSize: '2rem',
    letterSpacing: '1.1rem',
  },
}

theme.typography.h4 = {
  color: '#6D466B',
  fontFamily: raleway,
  fontWeight: 800,
  fontSize: '1rem',
  letterSpacing: '.1rem',
  textAlign: 'left',
}

export default theme;
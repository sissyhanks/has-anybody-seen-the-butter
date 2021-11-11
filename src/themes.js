import { createTheme } from '@mui/material/styles';

const raleway =  "'Raleway', sans-serif";
const merriweather = "'Merriweather', serif";

const theme = createTheme();

theme.typography.h2 = {
  fontFamily: raleway,
  fontWeight: 800,
  fontSize: '2rem',
  textAlign: 'right',
  '@media (min-width:300px)': {
    fontSize: '2.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '3.4rem',
  },
}

theme.typography.h3 = {
  fontFamily: merriweather,
  fontSize: '2rem',
  textAlign: 'right',
  '@media (min-width:300px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '3rem',
  },
}

export default theme;
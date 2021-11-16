import { createTheme } from '@mui/material/styles';

const raleway =  "'Raleway', sans-serif";
const merriweather = "'Merriweather', serif";

const theme = createTheme();

theme.typography.h2 = {
  fontFamily: raleway,
  fontWeight: 800,
  fontSize: '3rem',
  textAlign: 'left',
  // '@media (min-width:300px)': {
  //   fontSize: '1.5rem',
  // },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
  },
}

theme.typography.h3 = {
  fontFamily: merriweather,
  fontWeight: 300,
  fontStyle: 'italic',
  fontSize: '2rem',
  textAlign: 'left',
  '@media (min-width:300px)': {
    fontSize: '1rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2.5rem',
  },
}

theme.typography.h4 = {
  fontFamily: raleway,
  fontWeight: 300,
  fontSize: '1rem',
  textAlign: 'left',
  // '@media (min-width:300px)': {
  //   fontSize: '.75rem',
  // },
  [theme.breakpoints.down('md')]: {
    fontSize: '1.5rem',
  },
}

export default theme;
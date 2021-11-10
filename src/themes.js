import { createTheme } from '@mui/material/styles';

const raleway =  "'Raleway', sans-serif";
const merriweather = "'Merriweather', serif";

const theme = createTheme({
  typography: {
    title: {
      fontFamily: raleway,
      
    }
    
  },
});

export default theme;
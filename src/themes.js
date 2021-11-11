import { createTheme } from '@mui/material/styles';

const raleway =  "'Raleway', sans-serif";
const merriweather = "'Merriweather', serif";

const theme = createTheme({
  typography: {
      fontFamily: raleway,
      h2: {
        "fontWeight": 800,
      }
    }
    
  },
);

export default theme;
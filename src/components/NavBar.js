import { Container, AppBar, Typography } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';


import theme from "../themes";
import useStyles from '../styles';



function NavBar() {
  const classes = useStyles();
  return (
  <ThemeProvider theme={theme}>
    <Container>
      <AppBar>
        <Box sx={{ display: 'flex', direction: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', flexDirection: { xs: 'column-reverse', sm: 'row' } }}>
            <Box sx={{ ml: { xs: 0, sm: 5 }, display: 'flex', flexDirection: { xs: 'row', sm: 'column' }, justifyContent: 'space-evenly' }}>
              <Typography variant="h4" sx={{ mt: .5 }}>ABOUT</Typography>
              <Typography variant="h4" sx={{ mt: .5 }}>PORTFOLIO</Typography>
              <Typography variant="h4" sx={{ mt: .5 }}>CONTACT</Typography>
            </Box>
            <Box sx={{ mr: { xs: 0, sm: 5 }, mt: 2, mb: 2, alignSelf: { xs: 'center' } }}>
              <Typography variant="h2">
                Bernie McKnight
              </Typography>
              <Typography variant="h3" sx={{ ml: 1 }}>
                website developer
              </Typography>
            </Box>
        </Box>
      </AppBar>
    </Container>
  </ThemeProvider>
  );
}

export default NavBar;

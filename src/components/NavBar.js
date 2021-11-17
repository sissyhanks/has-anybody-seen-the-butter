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
      <AppBar variant="primary">
        <Box sx={{ display: 'flex', direction: { xs: 'column', sm: 'column', md: 'row' }, justifyContent: 'space-between', flexDirection: { xs: 'column', sm: 'column', md: 'row' } }}>
            <Box sx={{ ml: { xs: 0, sm: 0, md: 5 }, display: 'flex', flexDirection: { xs: 'row', sm: 'row', md: 'column' }, justifyContent: 'space-evenly' }}>
              <Typography variant="h4" sx={{ mt: .5 }}>ABOUT</Typography>
              <Typography variant="h4" sx={{ mt: .5 }}>PORTFOLIO</Typography>
              <Typography variant="h4" sx={{ mt: .5 }}>CONTACT</Typography>
            </Box>
            <Box sx={{ mt: {xs: 0, sm: 0, md: 2}, mb: 2, alignSelf: { xs: 'center' } }}>
              <Typography variant="h2">
                BERNIE McKNIGHT
              </Typography>
              <Typography variant="h3">
                WEBSITE DEVELOPER
              </Typography>
            </Box>
        </Box>
      </AppBar>
    </Container>
  </ThemeProvider>
  );
}

export default NavBar;

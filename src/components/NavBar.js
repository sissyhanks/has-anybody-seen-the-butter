import { Container, AppBar, Typography, Link } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';


import theme from "../themes";
import useStyles from '../styles';



function NavBar() {
  const classes = useStyles();
  return (
  <ThemeProvider theme={theme}>
    <Container>
      <AppBar variant="primary" position="static">
        <Box sx={{ display: 'flex', direction: { xs: 'column', sm: 'column', md: 'row' }, justifyContent: 'space-evenly', flexDirection: { xs: 'column', sm: 'column', md: 'row' } }}>
            <Box sx={{ ml: { xs: 0, sm: 0, md: 5 }, display: 'flex', flexDirection: { xs: 'row', sm: 'row', md: 'column' }, justifyContent: 'space-evenly' }}>
              <Link href="/about" underline="none" variant="h4" className={classes.nav} sx={{ mt: .5 }}>ABOUT</Link>
              <Link href="/projects" underline="none" variant="h4" className={classes.nav} sx={{ mt: .5 }}>PORTFOLIO</Link>
              <Link href="/contact" underline="none" variant="h4" className={classes.nav} sx={{ mt: .5 }}>CONTACT</Link>
            </Box>
            <Box sx={{ mt: {xs: 0, sm: 0, md: 2}, mb: 2, alignSelf: { xs: 'center', sm: 'center' } }}>
              <Link href="/" underline="none" variant="h2" className={classes.bernie}>
                BERNIE McKNIGHT
              </Link>
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

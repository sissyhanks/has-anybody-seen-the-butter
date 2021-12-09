import * as React from 'react';
import { Container, AppBar, Typography, Link } from "@mui/material";
import { ThemeProvider, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import theme from "../themes";
import useStyles from '../styles';

const raleway =  "'Raleway', sans-serif";


const LinkTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    color: 'rgba(255, 255, 255, 0.7)',
    '&.Mui-selected': {
      color: '#fff',
    },
    '&.Mui-focusVisible': {
      backgroundColor: 'rgba(100, 95, 228, 0.32)',
    },
  }),
);

function NavBar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
  <ThemeProvider theme={theme}>
    <Container>
      <AppBar variant="primary" position="static">
        <Box sx={{ display: 'flex', direction: { xs: 'column', sm: 'column', md: 'row' }, justifyContent: 'space-evenly', flexDirection: { xs: 'column', sm: 'column', md: 'row' } }}>
            <Box sx={{ ml: { xs: 0, sm: 0, md: 5 }, display: 'flex', flexDirection: { xs: 'row', sm: 'row', md: 'column' }, justifyContent: 'space-evenly' }}>
              <Tabs value={value} onChange={handleChange}>
                <LinkTab label="about" href="/about" sx={{ mt: .5 }} />
              {/* <Link href="/about" underline="none" variant="h4" onClick={() => changeTab('About')} className={tab === 'About' ? '' : 'classes.nav'} sx={{ mt: .5 }}>ABOUT</Link>
              <Link href="/projects" underline="none" variant="h4" className={classes.nav} sx={{ mt: .5 }}>PORTFOLIO</Link>
              <Link href="/contact" underline="none" variant="h4" className={classes.nav} sx={{ mt: .5 }}>CONTACT</Link> */}
              </Tabs>
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

import { Container, AppBar, Typography } from "@mui/material";
import BottomNavigation from '@mui/material/BottomNavigation';
import { ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';


import theme from "../themes";
import useStyles from '../styles';

import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


export default function Bottom() {
  const classes = useStyles();

  return (
  <ThemeProvider theme={theme}>
    <Container>
      <AppBar variant="primary" position="fixed" sx={{ top: 'auto', bottom: 25 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-evenly'}}>
          <Link  href="https://www.linkedin.com/in/bernadette-mcknight-a34a72201/" className={classes.nav}>
            <LinkedInIcon />
          </Link>
          <Link href="https://github.com/sissyhanks" className={classes.nav}>
            <GitHubIcon />
          </Link>
          <Link href="https://twitter.com/sissyhanks" className={classes.nav}>
            <TwitterIcon />
          </Link>

        </Box>

      </AppBar>
    </Container>
  </ThemeProvider>
  );
}
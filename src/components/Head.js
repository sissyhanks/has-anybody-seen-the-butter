import { Container, Grow } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import theme from "../themes";
import Typography from '@mui/material/Typography'
import useStyles from '../styles';

export default function Head() {
  const classes = useStyles();
  return (
  <ThemeProvider theme={theme}>
    <Container sx={{ mt: 2, mb: 2, alignSelf: 'flex-end' }}>
        <Typography variant="h2">
          <Box sx={{ display: 'inline-flex' }}>
          Bernie McKnight
          </Box>
        </Typography>
        <Typography variant="h3">
          <Box sx={{ ml: 1, display: 'inline-flex'}}>
          website developer
          </Box>
          </Typography>
    </Container>
  </ThemeProvider>
  );
}

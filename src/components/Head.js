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
    <Container>
        <Typography variant="h2">
          <Box>
          Bernie McKnight
          </Box>
        </Typography>
        <Typography variant="h3">
          <Box>
          website developer
          </Box>
          </Typography>
    </Container>
  </ThemeProvider>
  );
}

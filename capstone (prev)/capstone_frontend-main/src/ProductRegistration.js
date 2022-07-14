import * as React from 'react';
import {Link as ReactLink} from 'react-router-dom';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme();

export default function ProductRegistrationScreen() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      product: data.get('product'),
      description: data.get('description'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>

            <center><Typography variant="h3" component="h1">Register Product</Typography></center>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Product Name"
              name="name"
              autoComplete="name"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="description"
              label="Product Description"
              name="description"
              autoComplete="description"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="price"
              label="Price"
              name="price"
              autoComplete="price"
            />   
            <TextField
            margin="normal"
            required
            fullWidth
            id="category"
            label="Category"
            name="category"
            autoComplete="category"
          />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Register Product
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Product Listing
                </Link>
              </Grid>
              <Grid item>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

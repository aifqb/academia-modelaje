import { Box, Container, Typography, Button } from '@mui/material';

const CTAWhatsApp = () => (
  <Box sx={{ py: 6, textAlign: 'center', bgcolor: '#121212' }}>
    <Container>
      <Typography
        variant="h5"
        sx={{ mb: 2, color: '#C7C7C7', fontWeight: 300 }}
      >
        ¿Lista para comenzar?
      </Typography>
      <Button
        variant="contained"
        size="large"
        sx={{
          backgroundColor: '#25D366',
          color: '#000',
          fontWeight: 600,
          px: 4,
          py: 1.2,
          borderRadius: '2rem',
          '&:hover': {
            backgroundColor: '#1EBE5D',
          },
        }}
        href="https://wa.me/59177574547"
        target="_blank"
      >
        Hablar por WhatsApp
      </Button>
    </Container>
  </Box>
);

export default CTAWhatsApp;

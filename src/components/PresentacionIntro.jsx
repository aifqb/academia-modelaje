import { Box, Container, Typography } from '@mui/material';

const PresentacionIntro = () => (
  <Box sx={{ bgcolor: '#121212', py: 8 }}>
    <Container maxWidth="md">
      <Typography
        variant="h2"
        align="center"
        sx={{
          mb: 3,
          fontFamily: 'Playfair Display',
          fontWeight: 600,
          fontSize: '2.2rem',
          color: '#FF00C7',
        }}
      >
        Mucho más que pasarela
      </Typography>
      <Typography
        variant="body1"
        align="center"
        sx={{ color: '#C7C7C7', fontWeight: 300 }}
      >
        En nuestra academia, cada niña descubre su potencial, aprende a caminar con seguridad, hablar con claridad y expresarse con elegancia. No se trata solo de belleza exterior, sino de confianza interior.
      </Typography>
    </Container>
  </Box>
);

export default PresentacionIntro;

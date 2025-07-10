import { Box, Typography, Button, Container } from '@mui/material';

const HeroCurso10_14 = () => {
  const mensajeWhatsApp = encodeURIComponent(
    "Hola, estoy interesada en el curso de modelaje para niñas de 10 a 14 años. ¿Podrían brindarme más información?"
  );
  const linkWhatsApp = `https://wa.me/59177574547?text=${mensajeWhatsApp}`;

  return (
    <Box
      sx={{
        bgcolor: 'background.default',
        color: 'text.primary',
        py: { xs: 10, md: 14 },
        textAlign: 'center',
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h1"
          sx={{
            mb: 2,
            fontSize: { xs: '2.5rem', md: '3.5rem' },
            fontFamily: 'Playfair Display',
          }}
        >
          Curso de Modelaje 10 a 14 años
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: '1.2rem',
            mb: 4,
            color: 'text.secondary',
          }}
        >
          Una experiencia diseñada para que cada niña desarrolle su elegancia, seguridad y autoestima en pasarela y en la vida.
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          href={linkWhatsApp}
          target="_blank"
          sx={{ px: 5, py: 1.5 }}
        >
          Inscribirme por WhatsApp
        </Button>
      </Container>
    </Box>
  );
};

export default HeroCurso10_14;

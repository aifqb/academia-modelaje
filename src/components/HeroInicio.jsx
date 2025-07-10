import { Box, Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const HeroInicio = () => {
  return (
    <Box
      sx={{
        py: { xs: 10, md: 16 },
        textAlign: 'center',
        backgroundColor: '#0E0E10',
        animation: 'fadeIn 1.2s ease-in-out',
        '@keyframes fadeIn': {
          from: { opacity: 0, transform: 'translateY(20px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
      }}
    >
      <Container>
        <Typography
          variant="h1"
          sx={{
            fontFamily: 'Playfair Display',
            fontWeight: 700,
            mb: 2,
            fontSize: { xs: '2.5rem', md: '3.5rem' },
            background: 'linear-gradient(90deg, #FF00C7, #A259FF)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Academia Aracely Salinas
        </Typography>

        <Typography
          variant="body1"
          sx={{
            maxWidth: 600,
            mx: 'auto',
            mb: 4,
            color: '#C7C7C7',
            fontWeight: 300,
          }}
        >
          Formación profesional en modelaje para niñas, adolescentes y jóvenes, con enfoque en autoestima, elegancia y presencia.
        </Typography>

        <Button
          variant="contained"
          size="large"
          component={Link}
          to="/cursos/10-14"
          sx={{
            background: 'linear-gradient(90deg, #FF00C7, #A259FF)',
            color: '#0E0E10',
            borderRadius: '2rem',
            px: 5,
            py: 1.5,
            '&:hover': {
              filter: 'brightness(1.1)',
            },
          }}
        >
          Ver Curso 10–14 años
        </Button>
      </Container>
    </Box>
  );
};

export default HeroInicio;

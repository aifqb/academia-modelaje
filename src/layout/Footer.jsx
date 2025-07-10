// src/layout/Footer.jsx
import { Box, Container, Typography, Stack, IconButton, Divider } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#0E0E10',
        color: '#C7C7C7',
        py: { xs: 6, md: 8 },
        mt: 10,
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        animation: 'fadeIn 1.5s ease-in-out',
        '@keyframes fadeIn': {
          from: { opacity: 0, transform: 'translateY(20px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
      }}
    >
      <Container maxWidth="md" sx={{ textAlign: 'center' }}>
        {/* Dirección */}
        <Typography
          variant="body2"
          sx={{
            mb: 2,
            fontWeight: 300,
            color: '#C7C7C7',
          }}
        >
          Av. Arce, Hotel Ex Radisson, Piso 6 – Oficina 623 · La Paz, Bolivia
        </Typography>

        {/* Redes Sociales */}
        <Stack direction="row" spacing={3} justifyContent="center" sx={{ mb: 3 }}>
          <IconButton
            href="https://www.instagram.com/academiademodelajeas"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: '#FF00C7',
              transition: 'transform 0.2s ease',
              '&:hover': { transform: 'scale(1.2)' },
            }}
          >
            <InstagramIcon fontSize="medium" />
          </IconButton>
          <IconButton
            href="https://www.facebook.com/academiademodelajeas"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: '#A259FF',
              transition: 'transform 0.2s ease',
              '&:hover': { transform: 'scale(1.2)' },
            }}
          >
            <FacebookIcon fontSize="medium" />
          </IconButton>
          <IconButton
            href="https://www.tiktok.com/@academiademodelajeas"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: '#00FFF7',
              transition: 'transform 0.2s ease',
              '&:hover': { transform: 'scale(1.2)' },
            }}
          >
            <SmartDisplayIcon fontSize="medium" />
          </IconButton>
        </Stack>

        <Divider sx={{ bgcolor: 'rgba(255,255,255,0.1)', mb: 3 }} />

        {/* Frase inspiradora */}
        <Typography
          variant="body1"
          sx={{
            display: 'inline-block',
            background: 'linear-gradient(90deg, #FF00C7, #A259FF)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontStyle: 'italic',
            fontWeight: 400,
            fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
            mb: 2,
          }}
        >
          “Invierte en tu mente y estarás haciendo el negocio más grande de tu vida.” — Robert Kiyosaki
        </Typography>

        {/* Derechos reservados */}
        <Typography variant="caption" sx={{ display: 'block', mt: 1, fontSize: '0.8rem' }}>
          &copy; {year} Academia Aracely Salinas. Todos los derechos reservados.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;

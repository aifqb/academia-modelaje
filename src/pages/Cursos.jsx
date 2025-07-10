import MainLayout from '../layout/MainLayout';
import { Box, Container, Typography, Grid } from '@mui/material';
import CourseCard from '../components/CourseCard';

const Cursos = () => {
  const cursos = [
    {
      title: 'Curso de Modelaje 10 a 14 años',
      description: 'Pasarela, postura, fotografía, autoestima y mucho más para niñas en formación.',
      to: '/cursos/10-14',
    },
    // Puedes agregar más cursos aquí fácilmentes
  ];

  return (
    <MainLayout>
      <Box
        sx={{
          py: 10,
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
            variant="h2"
            align="center"
            sx={{
              mb: 6,
              fontFamily: 'Playfair Display',
              fontWeight: 600,
              fontSize: '2.5rem',
              background: 'linear-gradient(90deg, #FF00C7, #A259FF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Todos nuestros cursos
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            {cursos.map((curso, i) => (
              <Grid item xs={12} sm={6} md={4} key={i}>
                <CourseCard {...curso} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </MainLayout>
  );
};

export default Cursos;

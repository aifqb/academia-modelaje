import { Box, Container, Grid, Typography } from '@mui/material';
import CourseCard from './CourseCard';

const CursosGrid = () => (
  <Box sx={{ py: 8, bgcolor: '#0E0E10' }}>
    <Container>
      <Typography
        variant="h2"
        align="center"
        sx={{
          mb: 6,
          fontFamily: 'Playfair Display',
          fontWeight: 600,
          color: '#A259FF',
        }}
      >
        Nuestros Cursos
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <CourseCard
            title="Curso 10 a 14 años"
            description="Postura, pasarela, autoestima, fotografía y más. Ideal para niñas en etapa de formación."
            link="/cursos/10-14"
          />
        </Grid>
      </Grid>
    </Container>
  </Box>
);

export default CursosGrid;

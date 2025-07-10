import { Box, Container, Grid, Typography, Paper } from '@mui/material';

const horarios = [
  {
    titulo: 'Curso entre semana',
    dias: 'Lunes, martes y jueves',
    horario: '17:30 a 19:30',
    duracion: '1 mes',
    inicio: 'Inicio: 14 de julio de 2025',
  },
  {
    titulo: 'Curso de sábados',
    dias: 'Solo sábados',
    horario: '10:30 a 12:30',
    duracion: '2 meses',
    inicio: 'Inicio: 12 de julio de 2025',
  },
];

const HorariosCurso10_14 = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Container>
        <Typography variant="h2" align="center" sx={{ mb: 6 }}>
          Horarios y Fechas
        </Typography>
        <Grid container spacing={4}>
          {horarios.map((h, i) => (
            <Grid item xs={12} md={6} key={i}>
              <Paper
                elevation={4}
                sx={{
                  p: 4,
                  height: '100%',
                  bgcolor: 'background.default',
                  color: 'text.primary',
                  borderTop: '5px solid',
                  borderColor: 'secondary.main',
                }}
              >
                <Typography variant="h5" gutterBottom>
                  {h.titulo}
                </Typography>
                <Typography variant="body1">Días: {h.dias}</Typography>
                <Typography variant="body1">Horario: {h.horario}</Typography>
                <Typography variant="body1">Duración: {h.duracion}</Typography>
                <Typography variant="body1" sx={{ mt: 2, fontWeight: 'bold', color: 'text.secondary' }}>
                  {h.inicio}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default HorariosCurso10_14;

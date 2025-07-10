import { Box, Container, Grid, Typography, Paper } from '@mui/material';

const temas = [
  '12 técnicas de pasarela',
  'Postura y equilibrio',
  'Skin Care (cuidados de la piel)',
  'Elegancia',
  'Coach de vida y autoestima',
  'Pasarela de accesorios',
  'Taller de poses fotográficas',
  'Geometría de pasarelas',
  'Zumba Kids',
  'Pilates',
  'Oratoria',
  'Etiqueta y protocolo',
];

const ContenidoCurso10_14 = () => {
  return (
    <Box sx={{ bgcolor: 'background.paper', py: 8 }}>
      <Container>
        <Typography variant="h2" align="center" sx={{ mb: 6 }}>
          Contenido del Curso
        </Typography>
        <Grid container spacing={3}>
          {temas.map((tema, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  bgcolor: 'background.default',
                  color: 'text.primary',
                  borderLeft: '4px solid',
                  borderColor: 'primary.main',
                  height: '100%',
                }}
              >
                <Typography variant="body1">{tema}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ContenidoCurso10_14;

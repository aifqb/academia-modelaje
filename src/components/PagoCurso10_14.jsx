import { Box, Container, Typography, Paper, Grid } from '@mui/material';

const bancos = [
  {
    nombre: 'Banco BISA',
    cuenta: '5342404016',
  },
  {
    nombre: 'Banco Unión',
    cuenta: '100000-13753971',
  },
];

const PagoCurso10_14 = () => {
  return (
    <Box sx={{ bgcolor: 'background.paper', py: 8 }}>
      <Container>
        <Typography variant="h2" align="center" sx={{ mb: 6 }}>
          Inversión y Formas de Pago
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{ p: 4, bgcolor: 'background.default', color: 'text.primary' }}
            >
              <Typography variant="h5" gutterBottom>
                Inversión del curso
              </Typography>
              <Typography variant="body1">Bs. 430 por mes</Typography>
              <Typography variant="body1" sx={{ mt: 1 }}>
                Total Bs. 860 por 2 meses
              </Typography>
              <Typography variant="body1" sx={{ mt: 2, fontWeight: 'bold', color: 'secondary.main' }}>
                Descuento: Bs. 800 si pagas al contado
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{ p: 4, bgcolor: 'background.default', color: 'text.primary' }}
            >
              <Typography variant="h5" gutterBottom>
                Depósitos o transferencias
              </Typography>
              {bancos.map((banco, i) => (
                <Typography key={i} variant="body1">
                  {banco.nombre}: <strong>{banco.cuenta}</strong>
                </Typography>
              ))}
              <Typography variant="body2" sx={{ mt: 2 }}>
                Titular: Aracely Salinas Jiménez de Alborta  
                <br />
                CI: 4789871 L.P.
              </Typography>
              <Typography variant="caption" color="error" sx={{ mt: 2, display: 'block' }}>
                *No se aceptan devoluciones. Enviar comprobante para validar la inscripción.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default PagoCurso10_14;

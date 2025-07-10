import { Box, Container, TextField, Button, Typography, Stack } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useState } from 'react';

const FormularioWhatsApp = () => {
  const [form, setForm] = useState({
    nombre: '',
    edad: '',
    telefono: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const mensaje = `Hola, mi nombre es ${form.nombre}. Tengo ${form.edad} años y estoy interesada en el curso de modelaje para 10 a 14 años. Mi número de contacto es ${form.telefono}.`;
    const url = `https://wa.me/59177574547?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  };

  const isFormValid = form.nombre && form.edad && form.telefono;

  return (
    <Box sx={{ py: 8, bgcolor: 'background.paper' }}>
      <Container maxWidth="sm">
        <Typography variant="h2" align="center" sx={{ mb: 4 }}>
          Inscripción Rápida
        </Typography>

        <Stack spacing={3}>
          <TextField
            label="Nombre completo"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            label="Edad"
            name="edad"
            type="number"
            value={form.edad}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            label="Teléfono de contacto"
            name="telefono"
            value={form.telefono}
            onChange={handleChange}
            fullWidth
            required
          />

          <Button
            variant="contained"
            startIcon={<WhatsAppIcon />}
            onClick={handleSubmit}
            disabled={!isFormValid}
            sx={{
              py: 1.5,
              fontWeight: 600,
              bgcolor: '#25D366',
              color: '#000',
              '&:hover': {
                bgcolor: '#1EBE5D',
              },
            }}
          >
            Enviar por WhatsApp
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default FormularioWhatsApp;

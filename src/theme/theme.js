import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#0E0E10',
      paper: '#181818',
    },
    primary: {
      main: '#FF00C7', // Rosa vibrante
    },
    secondary: {
      main: '#A259FF', // Violeta suave
    },
    text: {
      primary: '#EAEAEA',
      secondary: '#C7C7C7',
    },
    success: {
      main: '#25D366', // WhatsApp verde
    },
  },
  typography: {
    fontFamily: ['Inter', 'Poppins', 'sans-serif'].join(','),
    h1: {
      fontFamily: 'Playfair Display, serif',
    },
    h2: {
      fontFamily: 'Playfair Display, serif',
    },
    h3: {
      fontFamily: 'Playfair Display, serif',
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '2rem',
          fontWeight: 600,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: '#181818',
        },
      },
    },
  },
});

export default theme;

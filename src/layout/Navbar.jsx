import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
  useScrollTrigger,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Detecta scroll con umbral suave
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 10,
    target: typeof window !== 'undefined' ? window : undefined,
  });

  // Marca cuando ya se hizo scroll al menos una vez
  useEffect(() => {
    if (trigger) {
      setHasScrolled(true);
    }
  }, [trigger]);

  const menuItems = [
    { text: 'Inicio', to: '/' },
    { text: 'Cursos', to: '/cursos' },
    { text: 'Contacto', to: '/cursos/10-14' },
  ];

  const background = trigger
    ? 'rgba(149, 117, 205, 0.85)' // translúcido
    : hasScrolled
      ? 'rgba(209, 196, 233, 1)' // gradiente claro estático
      : 'linear-gradient(90deg, #D1C4E9 0%, #9575CD 100%)'; // primer render

  return (
    <AppBar
      position="sticky"
      elevation={trigger ? 6 : 0}
      sx={{
        background,
        backdropFilter: trigger ? 'blur(12px)' : 'none',
        transition: 'all 0.4s ease-in-out',
        color: '#0E0E10',
        zIndex: 9999,
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, sm: 4, md: 8 } }}>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            textDecoration: 'none',
            color: 'inherit',
            fontFamily: 'Playfair Display',
            fontWeight: 700,
            fontSize: '1.4rem',
          }}
        >
          Aracely Salinas
        </Typography>

        {isMobile ? (
          <>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={() => setDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
              <Box sx={{ width: 240 }}>
                <List>
                  {menuItems.map(({ text, to }) => (
                    <ListItem key={text} disablePadding>
                      <ListItemButton
                        component={Link}
                        to={to}
                        onClick={() => setDrawerOpen(false)}
                      >
                        <ListItemText primary={text} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Drawer>
          </>
        ) : (
          <Box sx={{ display: 'flex', gap: 4 }}>
            {menuItems.map(({ text, to }) => (
              <Typography
                key={text}
                component={Link}
                to={to}
                sx={{
                  textDecoration: 'none',
                  color: 'inherit',
                  fontWeight: 500,
                  fontSize: '1rem',
                  transition: 'opacity 0.3s',
                  '&:hover': { opacity: 0.7 },
                }}
              >
                {text}
              </Typography>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

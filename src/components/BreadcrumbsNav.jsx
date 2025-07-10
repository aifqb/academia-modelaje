import { Breadcrumbs, Link, Typography, Box } from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';

const BreadcrumbsNav = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  if (location.pathname === '/') return null; // Ocultar en Home

  return (
    <Box sx={{ px: { xs: 2, md: 6 }, pt: 2 }}>
      <Breadcrumbs aria-label="breadcrumb" separator="›" sx={{ color: 'text.secondary' }}>
        <Link component={RouterLink} underline="hover" color="inherit" to="/">
          Inicio
        </Link>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;

          return isLast ? (
            <Typography
              key={to}
              sx={{
                fontWeight: 500,
                background: 'linear-gradient(to right, #FF00C7, #A259FF)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {decodeURI(value).replace(/-/g, ' ')}
            </Typography>
          ) : (
            <Link
              component={RouterLink}
              underline="hover"
              color="inherit"
              to={to}
              key={to}
            >
              {decodeURI(value).replace(/-/g, ' ')}
            </Link>
          );
        })}
      </Breadcrumbs>
    </Box>
  );
};

export default BreadcrumbsNav;

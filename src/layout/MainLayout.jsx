import { Box, Container } from '@mui/material';
import Navbar from './Navbar';
import Footer from './Footer';
import BreadcrumbsNav from '../components/BreadcrumbsNav';

const MainLayout = ({ children }) => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'background.default',
      }}
    >
      <Navbar />
      <BreadcrumbsNav />

      {/* Contenedor general de toda la app */}
      <Container maxWidth="lg" sx={{ flexGrow: 1, py: 4 }}>
        {children}
      </Container>

      <Footer />
    </Box>
  );
};

export default MainLayout;

import { Box, Container, Typography } from '@mui/material';

const CourseIntro = ({ title, description }) => (
  <Box sx={{ py: 8, bgcolor: '#0E0E10', color: '#EAEAEA' }}>
    <Container>
      <Typography
        variant="h3"
        sx={{
          fontFamily: 'Playfair Display',
          mb: 2,
          color: '#FF00C7',
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="body1"
        sx={{ maxWidth: 700, color: '#C7C7C7' }}
      >
        {description}
      </Typography>
    </Container>
  </Box>
);

export default CourseIntro;

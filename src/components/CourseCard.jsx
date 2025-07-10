import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const CourseCard = ({ title, description, to }) => {
  return (
    <Card
      sx={{
        backgroundColor: '#181818',
        color: '#EAEAEA',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: 3,
        boxShadow: '0 4px 15px rgba(255, 0, 199, 0.2)',
        transition: 'transform 0.3s ease',
        '&:hover': { transform: 'scale(1.02)' },
      }}
    >
      <CardContent>
        <Typography
          variant="h5"
          component="div"
          sx={{ mb: 1, fontFamily: 'Playfair Display', fontWeight: 600 }}
        >
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: '#C7C7C7' }}>
          {description}
        </Typography>
      </CardContent>

      <Box sx={{ p: 2 }}>
        <Button
          variant="outlined"
          fullWidth
          component={RouterLink}
          to={to}
          sx={{
            borderColor: '#FF00C7',
            color: '#FF00C7',
            '&:hover': {
              borderColor: '#A259FF',
              backgroundColor: '#A259FF10',
            },
          }}
        >
          Ver más
        </Button>
      </Box>
    </Card>
  );
};

export default CourseCard;

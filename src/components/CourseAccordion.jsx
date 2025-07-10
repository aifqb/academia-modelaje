import { Accordion, AccordionSummary, AccordionDetails, Typography, Box, Container } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const CourseAccordion = ({ items }) => (
  <Box sx={{ bgcolor: '#121212', py: 6 }}>
    <Container maxWidth="md">
      {items.map((item, index) => (
        <Accordion key={index} sx={{ bgcolor: '#181818', color: '#EAEAEA', mb: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#FF00C7' }} />}>
            <Typography sx={{ fontWeight: 600 }}>{item.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontWeight: 300 }}>{item.content}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  </Box>
);

export default CourseAccordion;

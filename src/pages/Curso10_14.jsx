import MainLayout from '../layout/MainLayout';
import CourseIntro from '../components/CourseIntro';
import CourseAccordion from '../components/CourseAccordion';
import CourseCTA from '../components/CourseCTA';
import temario from '../components/TemarioCurso';

const Curso10_14 = () => {
  return (
    <MainLayout>
      <CourseIntro
        title="Curso para niñas de 10 a 14 años"
        description="Una experiencia transformadora donde cada niña potencia su autoestima, elegancia y actitud a través del modelaje."
      />
      <CourseAccordion items={temario} />
      <CourseCTA />
    </MainLayout>
  );
};

export default Curso10_14;

import MainLayout from '../layout/MainLayout';
import HeroInicio from '../components/HeroInicio';
import PresentacionIntro from '../components/PresentacionIntro';
import CursosGrid from '../components/CursosGrid';
import CTAWhatsApp from '../components/CTAWhatsApp';

const Home = () => {
  return (
    <MainLayout>
      <HeroInicio />
      <PresentacionIntro />
      <CursosGrid />
      <CTAWhatsApp />
    </MainLayout>
  );
};

export default Home;

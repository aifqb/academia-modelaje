import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Curso10_14 from '../pages/Curso10_14';
import Cursos from '../pages/Cursos';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/cursos/10-14" element={<Curso10_14 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;

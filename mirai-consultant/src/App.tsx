import './index.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import SimplePage from './pages/SimplePage';
import About from './components/About';
import Careers from './pages/Careers';
import Highway from './pages/sectors/Highway';
import Bridges from './pages/sectors/Bridges';
import Railways from './pages/sectors/Railways';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>        
        <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<SimplePage title="Gallery">Visuals and project images.</SimplePage>} />
        <Route path="/projects" element={<SimplePage title="Projects">Selected iconic projects.</SimplePage>} />
  <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<SimplePage title="Contact">Contact details and consultation form.</SimplePage>} />
  <Route path="/services/highway" element={<Highway />} />
  <Route path="/services/bridges" element={<Bridges />} />
  <Route path="/services/railways" element={<Railways />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}


import './index.css';
import { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import SimplePage from './pages/SimplePage';
import About from './components/About';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Highway from './pages/sectors/Highway';
import Bridges from './pages/sectors/Bridges';
import Railways from './pages/sectors/Railways';
import ArchitectureBuildings from './pages/sectors/ArchitectureBuildings';
import Geospatial from './pages/sectors/Geospatial';
import GeotechnicalInvestigation from './pages/sectors/GeotechnicalInvestigation';
import ComingSoon from './components/ComingSoon';

export default function App() {
  const [gateOpen, setGateOpen] = useState(false);

  if (!gateOpen) {
    return (
      <ComingSoon
        durationSeconds={10}
        launchDateLabel="October 10, 2025"
        onComplete={() => setGateOpen(true)}
      />
    );
  }

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/projects" element={<SimplePage title="Projects">Selected iconic projects.</SimplePage>} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sectors/highway" element={<Highway />} />
        <Route path="/sectors/bridges" element={<Bridges />} />
        <Route path="/sectors/railways" element={<Railways />} />
        <Route path="/sectors/architecture-buildings" element={<ArchitectureBuildings />} />
        <Route path="/sectors/geospatial" element={<Geospatial />} />
        <Route path="/sectors/geotechnical-investigation" element={<GeotechnicalInvestigation />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}


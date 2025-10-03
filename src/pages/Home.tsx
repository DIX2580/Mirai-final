import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Projects from '../components/Projects';
import ValueProps from '../components/ValueProps';
import TestimonialsNew from '../components/TestimonialsNew';
import Team from '../components/Team';
import FAQ from '../components/FAQ';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Projects />
      <ValueProps />
      <TestimonialsNew />
      <Team />
      <FAQ />
    </>
  );
}

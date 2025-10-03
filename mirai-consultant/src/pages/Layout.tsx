import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackgroundVideo from '../components/BackgroundVideo';
import FancyCursor from '../components/FancyCursor';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col relative bg-[var(--bg)]">
      {/* Global video background (fixed to viewport, starts below navbar) */}
      <div className="fixed left-0 right-0 bottom-0 top-16 lg:top-20 z-[1]">
        <BackgroundVideo />
      </div>
      <div className="relative z-[100]">
        <Navbar />
      </div>
      <main className="flex-1 relative z-10">
        <Outlet />
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
      <FancyCursor />
    </div>
  );
}

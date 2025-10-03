import { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';

type MotionLevel = 3 | 2 | 1 | 0; // 3 = full, 0 = minimal

interface MotionContextValue {
  level: MotionLevel;
}

const MotionContext = createContext<MotionContextValue>({ level: 3 });

// eslint-disable-next-line react-refresh/only-export-components
export function useMotionLevel() {
  return useContext(MotionContext).level;
}

export function MotionProvider({ children }: { children: ReactNode }) {
  const [level, setLevel] = useState<MotionLevel>(3);

  useEffect(() => {
    const handle = () => {
      const y = window.scrollY;
      // Adjust breakpoints as needed; deeper scroll lowers motion.
      let next: MotionLevel = 3;
      if (y > 400) next = 2;
      if (y > 1200) next = 1;
      if (y > 2200) next = 0;
      setLevel((prev) => (prev === next ? prev : next));
    };
    handle();
    window.addEventListener('scroll', handle, { passive: true });
    return () => window.removeEventListener('scroll', handle);
  }, []);

  return <MotionContext.Provider value={{ level }}>{children}</MotionContext.Provider>;
}

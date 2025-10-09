type FooterProps = {
  minimal?: boolean;
};

export default function Footer({ minimal }: FooterProps) {
  if (minimal) {
    return (
      <footer className="relative border-t border-white/10 bg-black/30">
        <div className="py-4 text-center text-xs text-slate-500">
          © 2025 MIRAI CONSULTANCY. All rights reserved.
        </div>
      </footer>
    );
  }

  return (
    <footer className="relative border-t border-white/10 bg-black/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid gap-8 sm:grid-cols-2 items-start">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-sm bg-gradient-to-br from-fuchsia-500 via-violet-500 to-sky-500" />
            <span className="brand-title text-white/90 font-semibold tracking-widest">MIRAI CONSULTANCY</span>
          </div>
          <p className="mt-3 text-sm text-slate-400 max-w-md">
            India's leading engineering consultancy delivering future‑ready infrastructure across Railways, Bridges, Buildings, Survey & Highway sectors.
          </p>
        </div>
        <div className="sm:justify-self-end">
          <ul className="text-sm text-slate-300 space-y-2">
            <li>
              <span className="text-slate-400">Address:</span> 2nd Floor, Mirai House, Connaught Place, New Delhi, India
            </li>
            <li>
              <span className="text-slate-400">Email:</span> <a className="hover:text-white" href="mailto:info@miraiconsultancy.co.in">info@miraiconsultancy.co.in</a>
            </li>
            <li>
              <span className="text-slate-400">Phone:</span> <a className="hover:text-white" href="tel:+917606989489">+91 76069 89489</a>
            </li>
            <li className="flex gap-4 pt-1">
              <a href="#" aria-label="LinkedIn" className="hover:text-white">LinkedIn</a>
              <a href="#" aria-label="Twitter" className="hover:text-white">Twitter/X</a>
              <a href="#" aria-label="Email" className="hover:text-white">Email</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-slate-500">
        © 2025 MIRAI CONSULTANCY. All rights reserved.
      </div>
    </footer>
  );
}

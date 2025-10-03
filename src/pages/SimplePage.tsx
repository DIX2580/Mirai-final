export default function SimplePage({ title, children }: { title: string; children?: React.ReactNode }) {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-white mb-4">{title}</h1>
        <div className="text-slate-300">{children}</div>
      </div>
    </section>
  );
}

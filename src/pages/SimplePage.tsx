import Seo, { type SeoProps } from '../components/Seo';

const BASE_URL = 'http://miraiconsultancy.co.in';

type SimplePageProps = {
  title: string;
  children?: React.ReactNode;
  seo?: Partial<Omit<SeoProps, 'title'>> & { slug?: string; customTitle?: string };
};

export default function SimplePage({ title, children, seo }: SimplePageProps) {
  const slug = seo?.slug ?? title.toLowerCase().replace(/\s+/g, '-');
  const pageTitle = seo?.customTitle ?? `${title} | Mirai Consultancy`;
  const canonical = (seo?.canonical ?? `${BASE_URL}/${slug}`).replace(/\/\/+/, '/');
  return (
    <section className="relative py-24">
      <Seo
        title={pageTitle}
        description={seo?.description}
        keywords={seo?.keywords}
        canonical={seo?.canonical ?? canonical}
        ogDescription={seo?.ogDescription ?? seo?.description}
        ogImage={seo?.ogImage ?? `${BASE_URL}/Mirailogo.png`}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-white mb-4">{title}</h1>
        <div className="text-slate-300">{children}</div>
      </div>
    </section>
  );
}

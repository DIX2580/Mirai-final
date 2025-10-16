import Hero from '../components/Hero';
import Services from '../components/Services';
import Seo from '../components/Seo';

const BASE_URL = 'http://miraiconsultancy.co.in';

export default function Home() {
  return (
    <>
      <Seo
        title="Mirai Consultancy Bhubaneswar | Railways, Highways & Bridge Engineers"
        description="Mirai Consultancy in Bhubaneswar offers railway, highway, bridge and geotechnical engineering, delivering feasibility, DPR, PMC and proof consultancy across India."
        keywords={[
          'Mirai Consultancy',
          'Mirai Consultancy Bhubaneswar',
          'miraicunsultancy',
          'mirai consultancya',
          'railway engineering consultancy',
          'railway department consultants bhubaneswar',
          'highway engineering services',
          'bridge consultants odisha',
          'geotechnical consultants bhubaneswar',
          'transport planning odisha',
          'project management consultants odisha',
          'infrastructure consultants bhubaneswar',
          'infrastructure consultants india',
          'civil engineering consultants bhubaneswar',
          'railway dpr consultants india',
          'highway dpr consultants india',
          'mirai consultancy odisha',
          'mirai consultancy india',
        ]}
        canonical={`${BASE_URL}/`}
        ogImage={`${BASE_URL}/Mirailogo.png`}
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'ProfessionalService',
          name: 'Mirai Consultancy',
          url: `${BASE_URL}/`,
          logo: `${BASE_URL}/Mirailogo.png`,
          image: `${BASE_URL}/Mirailogo.png`,
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Bhubaneswar',
            addressRegion: 'Odisha',
            addressCountry: 'India',
          },
          areaServed: {
            '@type': 'Country',
            name: 'India',
          },
          sameAs: [
            'https://www.linkedin.com/company/mirai-consultancy',
          ],
        }}
      />
      <Hero />
      <Services />
    </>
  );
}

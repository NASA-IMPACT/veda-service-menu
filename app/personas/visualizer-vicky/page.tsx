import BookSpread from '@/components/book/BookSpread';
import PersonaProfilePage from '@/components/pages/PersonaProfilePage';
import PersonaBundlePage from '@/components/pages/PersonaBundlePage';

export default function VisualizerVickyPage() {
  return (
    <BookSpread
      leftPage={
        <PersonaProfilePage
          name="Visualizer Vicky"
          subtitle="The Storytelling Developer"
          icon="🎨"
          role="Frontend Developer / Data Visualization Specialist"
          description="Visualizer Vicky transforms dense scientific datasets into engaging web experiences. She builds tools like the Fire Event Explorer and EMIT Methane Plume viewer that let non-technical audiences explore satellite data intuitively. Vicky needs robust APIs and flexible website infrastructure."
          keyNeeds={[
            'OGC Tiles and WMTS APIs for performant map rendering',
            'Statistics APIs for on-the-fly data summarization',
            'Custom visualization tool development support',
            'Website design, development, and hosting with CMS flexibility',
            'Iterative stakeholder collaboration during development',
          ]}
          painPoints={[
            'Slow or unreliable tile services that degrade user experience',
            'Limited documentation for geospatial APIs',
            'Disconnect between data providers and visualization requirements',
          ]}
        />
      }
      rightPage={
        <PersonaBundlePage
          bundleName="Visualization Studio"
          bundleDescription="Empowers developers to build stunning, performant data visualization experiences. Combines robust APIs, custom tool development, and full-stack website support to turn complex scientific data into accessible public engagement tools."
          coreServices={[
            {
              category: 'Data Services',
              services: ['OGC Tiles, WMTS', 'Statistics APIs'],
              link: '/services/data-services',
            },
            {
              category: 'Custom Visualization Development',
              services: ['Fire Event Explorer', 'EMIT Methane Plume', 'Global Mangrove Distribution'],
              link: '/services/visualization',
            },
            {
              category: 'Website Management',
              services: ['Design and development', 'CMS integration (Drupal, Tina, WordPress)'],
              link: '/services/website-management',
            },
          ]}
        />
      }
    />
  );
}

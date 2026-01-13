import BookSpread from '@/components/book/BookSpread';
import PersonaProfilePage from '@/components/pages/PersonaProfilePage';
import PersonaBundlePage from '@/components/pages/PersonaBundlePage';

export default function DataDanaPage() {
  return (
    <BookSpread
      leftPage={
        <PersonaProfilePage
          name="Data Dana"
          subtitle="The Data-Hungry Scientist"
          icon="🔬"
          role="Research Scientist / Data Analyst"
          description="Data Dana is a mid-career scientist who analyzes Landsat and Sentinel-2 imagery to study environmental changes. She's comfortable writing Python code but frustrated by hours spent downloading, reformatting, and preprocessing data before actual analysis."
          keyNeeds={[
            'Cloud-optimized data formats (COG, Zarr) to eliminate download bottlenecks',
            'STAC catalog for discovering and querying available datasets',
            'JupyterHub environment with pre-configured libraries and scalable compute',
            'Example Jupyter Notebooks to accelerate her learning curve',
            'Help desk support when encountering technical issues',
          ]}
          painPoints={[
            'Time lost to data wrangling instead of science',
            'Local computing resources insufficient for large-scale analysis',
            'Dependency conflicts when setting up analysis environments',
          ]}
        />
      }
      rightPage={
        <PersonaBundlePage
          bundleName="Researcher Accelerator"
          bundleDescription="Eliminates data preparation bottlenecks so scientists can focus on analysis. Combines cloud-optimized data access, scalable computing environments, and expert support into a seamless research platform."
          coreServices={[
            {
              category: 'Data Services',
              services: ['Cloud-Optimized GeoTIFFs, Zarr stores', 'STAC catalog access', 'Statistics API'],
              link: '/services/data-services',
            },
            {
              category: 'Algorithm Development & Data Integration',
              services: ['Version-controlled environments', 'Data harmonization', 'Multi-mission integration'],
              link: '/services/algorithm-development',
            },
            {
              category: 'Cloud Computing',
              services: ['JupyterHub deployment', 'Scalable storage/memory', 'Library dependency resolution'],
              link: '/services/cloud-computing',
            },
            {
              category: 'Content Curation',
              services: ['Example Jupyter Notebooks', 'Data access workflows'],
              link: '/services/content-curation',
            },
            {
              category: 'User Services',
              services: ['Help desk support', 'Community forum access'],
              link: '/services/user-services',
            },
          ]}
        />
      }
    />
  );
}

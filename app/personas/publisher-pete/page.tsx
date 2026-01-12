import BookSpread from '@/components/book/BookSpread';
import PersonaProfilePage from '@/components/pages/PersonaProfilePage';
import PersonaBundlePage from '@/components/pages/PersonaBundlePage';

export default function PublisherPetePage() {
  return (
    <BookSpread
      leftPage={
        <PersonaProfilePage
          name="Publisher Pete"
          subtitle="The Mission-Driven Program Manager"
          icon="📊"
          role="Program Manager / Data Steward"
          description="Publisher Pete manages a portfolio of Earth observation datasets that his agency is mandated to share publicly. He understands data management principles but relies on technical teams for implementation. Pete needs a streamlined pathway to transform archival data into modern, discoverable formats."
          keyNeeds={[
            'Data transformation services to convert legacy formats to cloud-optimized standards',
            'STAC catalog ingestion and reliable AWS S3 hosting',
            'Content curation support including data quality reports',
            'Automated pipelines to update datasets when new versions release',
            'Data recovery capabilities for business continuity',
          ]}
          painPoints={[
            'Complex procurement processes to acquire technical services',
            'Lack of in-house expertise for cloud data infrastructure',
            'Pressure to demonstrate public value of agency data investments',
          ]}
        />
      }
      rightPage={
        <PersonaBundlePage
          bundleName="Data Publishing Suite"
          bundleDescription="Provides end-to-end support for agencies needing to transform archival data into discoverable, cloud-hosted public resources. Handles the technical complexity of format conversion, catalog management, and ongoing maintenance."
          coreServices={[
            {
              category: 'Data Services',
              services: ['Conversion to COG, Zarr', 'STAC catalog creation', 'AWS S3 storage', 'Data recovery'],
              link: '/services/data-services',
            },
            {
              category: 'Content Curation',
              services: ['Dataset documentation', 'Quality reports', 'Automation pipelines'],
              link: '/services/content-curation',
            },
            {
              category: 'Cloud Infrastructure',
              services: ['Hosting infrastructure', 'Automated updates'],
              link: '/services/cloud-infrastructure',
            },
          ]}
        />
      }
    />
  );
}

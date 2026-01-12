import BookSpread from '@/components/book/BookSpread';
import ServiceCategoriesMenu from '@/components/pages/ServiceCategoriesMenu';
import ServiceDetailPage from '@/components/pages/ServiceDetailPage';

export default function DataServicesPage() {
  const content = (
    <div className="space-y-6">
      {/* Migration to Cloud-Optimized Formats */}
      <section className="bg-white rounded-lg p-5 shadow-sm border border-[var(--page-border)]">
        <div className="flex items-start">
          <div className="text-4xl mr-4">☁️</div>
          <div>
            <h3 className="text-xl font-semibold text-[var(--foreground)] mb-2">
              Migration to Cloud-Optimized Formats
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Convert traditional geospatial data to cloud-optimized formats like COG and Zarr for faster,
              more efficient access and visualization at scale.
            </p>
          </div>
        </div>
      </section>

      {/* Data Ingestion and Hosting */}
      <section className="bg-white rounded-lg p-5 shadow-sm border border-[var(--page-border)]">
        <div className="flex items-start">
          <div className="text-4xl mr-4">📥</div>
          <div>
            <h3 className="text-xl font-semibold text-[var(--foreground)] mb-2">
              Data Ingestion and Hosting
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Securely ingest and host geospatial datasets with automated quality checks, metadata extraction,
              and reliable cloud infrastructure ensuring high availability.
            </p>
          </div>
        </div>
      </section>

      {/* Data APIs for Visualization & Statistics */}
      <section className="bg-white rounded-lg p-5 shadow-sm border border-[var(--page-border)]">
        <div className="flex items-start">
          <div className="text-4xl mr-4">🔌</div>
          <div>
            <h3 className="text-xl font-semibold text-[var(--foreground)] mb-2">
              Data APIs for Visualization & Statistics
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Access data through STAC endpoints, raster tile services, and statistical analysis APIs.
              Developer-friendly tools for seamless integration into your applications.
            </p>
          </div>
        </div>
      </section>
    </div>
  );

  return (
    <BookSpread
      leftPage={<ServiceCategoriesMenu />}
      rightPage={
        <ServiceDetailPage
          title="Data Services"
          description="Access and integrate Earth observation data through our comprehensive data services and APIs. Discover, query, and retrieve geospatial datasets for your research and applications."
          icon="🛰️"
          content={content}
        />
      }
    />
  );
}

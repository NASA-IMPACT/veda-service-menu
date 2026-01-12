import BookSpread from '@/components/book/BookSpread';
import ServiceCategoriesMenu from '@/components/pages/ServiceCategoriesMenu';
import ServiceDetailPage from '@/components/pages/ServiceDetailPage';

export default function ContentCurationPage() {
  const content = (
    <div className="space-y-6">
      {/* Scientific Research and Documentation for Datasets of Interest */}
      <section className="bg-white rounded-lg p-5 shadow-sm border border-[var(--page-border)]">
        <div className="flex items-start">
          <div className="text-4xl mr-4">🔬</div>
          <div>
            <h3 className="text-xl font-semibold text-[var(--foreground)] mb-2">
              Scientific Research and Documentation for Datasets of Interest
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Conduct research and create comprehensive documentation for Earth observation datasets.
              Clear, accurate descriptions that help users understand data provenance, quality, and applications.
            </p>
          </div>
        </div>
      </section>

      {/* Webpage Templates for Document Dissemination */}
      <section className="bg-white rounded-lg p-5 shadow-sm border border-[var(--page-border)]">
        <div className="flex items-start">
          <div className="text-4xl mr-4">📄</div>
          <div>
            <h3 className="text-xl font-semibold text-[var(--foreground)] mb-2">
              Webpage Templates for Document Dissemination
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Design and deploy standardized webpage templates for consistent document publishing.
              Streamlined formats that make scientific information accessible and easy to navigate.
            </p>
          </div>
        </div>
      </section>

      {/* Documentation of Websites Managed */}
      <section className="bg-white rounded-lg p-5 shadow-sm border border-[var(--page-border)]">
        <div className="flex items-start">
          <div className="text-4xl mr-4">📋</div>
          <div>
            <h3 className="text-xl font-semibold text-[var(--foreground)] mb-2">
              Documentation of Websites Managed
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Maintain comprehensive documentation for all managed websites and web platforms.
              Technical guides, content workflows, and maintenance procedures for seamless operations.
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
          title="Content Curation"
          description="Expert content curation and management solutions. Organize, curate, and present your scientific data and information in compelling and accessible ways."
          icon="📚"
          content={content}
        />
      }
    />
  );
}

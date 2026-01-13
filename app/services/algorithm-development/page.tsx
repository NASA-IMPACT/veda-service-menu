import BookSpread from '@/components/book/BookSpread';
import ServiceCategoriesMenu from '@/components/pages/ServiceCategoriesMenu';
import ServiceDetailPage from '@/components/pages/ServiceDetailPage';

export default function AlgorithmDevelopmentPage() {
  const content = (
    <div className="space-y-4">
      {/* Version-Controlled Algorithm Development */}
      <section className="bg-white rounded-lg p-4 shadow-sm border border-[var(--page-border)]">
        <div className="flex items-start">
          <div className="text-3xl mr-3">💻</div>
          <div>
            <h3 className="text-lg font-semibold text-[var(--foreground)] mb-1">
              Version-Controlled Algorithm Development
            </h3>
            <p className="text-gray-700 text-sm">
              Git-integrated development workspaces enabling reproducible scientific computing with full version history and collaborative features. Teams can develop, test, and iterate on algorithms together with shared computing resources, managed IP considerations, and community-driven algorithm libraries where researchers discover, adapt, and contribute workflows.
            </p>
          </div>
        </div>
      </section>

      {/* Data Harmonization & Standardization */}
      <section className="bg-white rounded-lg p-4 shadow-sm border border-[var(--page-border)]">
        <div className="flex items-start">
          <div className="text-3xl mr-3">🔄</div>
          <div>
            <h3 className="text-lg font-semibold text-[var(--foreground)] mb-1">
              Data Harmonization & Standardization
            </h3>
            <p className="text-gray-700 text-sm">
              Transform disparate datasets into common coordinate reference frames and standardized formats for seamless comparative analysis. Automated pipelines handle data from heterogeneous sources—satellites, aircraft, and ground stations—at varying resolutions and processing levels, enabling cross-platform scientific research.
            </p>
          </div>
        </div>
      </section>

      {/* Multi-Mission Data Integration */}
      <section className="bg-white rounded-lg p-4 shadow-sm border border-[var(--page-border)]">
        <div className="flex items-start">
          <div className="text-3xl mr-3">🌍</div>
          <div>
            <h3 className="text-lg font-semibold text-[var(--foreground)] mb-1">
              Multi-Mission Data Integration
            </h3>
            <p className="text-gray-700 text-sm">
              Unified access to data from multiple NASA and ESA missions (BIOMASS, GEDI, NISAR) within a single cloud platform. Interoperable metadata systems with Common Metadata Repository (CMR) integration enhance discoverability across organizational boundaries, eliminating the need to manage redundant infrastructure or transfer massive datasets.
            </p>
          </div>
        </div>
      </section>

      {/* Scientific Workflow Orchestration */}
      <section className="bg-white rounded-lg p-4 shadow-sm border border-[var(--page-border)]">
        <div className="flex items-start">
          <div className="text-3xl mr-3">⚡</div>
          <div>
            <h3 className="text-lg font-semibold text-[var(--foreground)] mb-1">
              Scientific Workflow Orchestration
            </h3>
            <p className="text-gray-700 text-sm">
              Automated pipeline management for complex multi-step scientific analyses with co-located compute and data resources. Workflow tools handle dependencies, resource allocation, and error recovery for large-scale processing tasks, enabling efficient execution of reproducible research pipelines in version-controlled environments.
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
          title="Algorithm Development & Data Integration"
          description="Collaborative platform for developing, sharing, and deploying reproducible scientific algorithms with standardized multi-mission data access."
          icon="🧬"
          content={content}
        />
      }
    />
  );
}

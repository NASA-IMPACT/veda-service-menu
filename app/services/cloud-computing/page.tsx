import BookSpread from '@/components/book/BookSpread';
import ServiceCategoriesMenu from '@/components/pages/ServiceCategoriesMenu';
import ServiceDetailPage from '@/components/pages/ServiceDetailPage';

export default function CloudComputingPage() {
  const content = (
    <div className="space-y-6">
      {/* Cutting-Edge Technological Development to Support Research to Operations Workflows */}
      <section className="bg-white rounded-lg p-5 shadow-sm border border-[var(--page-border)]">
        <div className="flex items-start">
          <div className="text-4xl mr-4">🚀</div>
          <div>
            <h3 className="text-xl font-semibold text-[var(--foreground)] mb-2">
              Cutting-Edge Technological Development to Support Research to Operations Workflows
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Implement advanced cloud technologies that bridge research and operational environments.
              Streamlined workflows that transition research outputs into production systems efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* JupyterHub Deployment and Management */}
      <section className="bg-white rounded-lg p-5 shadow-sm border border-[var(--page-border)]">
        <div className="flex items-start">
          <div className="text-4xl mr-4">🔧</div>
          <div>
            <h3 className="text-xl font-semibold text-[var(--foreground)] mb-2">
              JupyterHub Deployment and Management
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Deploy and manage multi-user JupyterHub environments for collaborative data science work.
              Shared computing resources with customizable configurations for your team's specific needs.
            </p>
          </div>
        </div>
      </section>

      {/* Scalable Cloud Resources to Support Stakeholder Needs */}
      <section className="bg-white rounded-lg p-5 shadow-sm border border-[var(--page-border)]">
        <div className="flex items-start">
          <div className="text-4xl mr-4">📈</div>
          <div>
            <h3 className="text-xl font-semibold text-[var(--foreground)] mb-2">
              Scalable Cloud Resources to Support Stakeholder Needs
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Flexible, scalable computing resources that adapt to varying workload demands.
              On-demand infrastructure ensuring stakeholders have the computational power they need, when they need it.
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
          title="Cloud Computing"
          description="High-performance cloud computing resources for large-scale data analysis. Access powerful computational infrastructure for your most demanding workloads."
          icon="☁️"
          content={content}
        />
      }
    />
  );
}

import BookSpread from '@/components/book/BookSpread';
import ServiceCategoriesMenu from '@/components/pages/ServiceCategoriesMenu';
import ServiceDetailPage from '@/components/pages/ServiceDetailPage';

export default function CloudInfrastructurePage() {
  const content = (
    <div className="space-y-6">
      {/* Backend Services for Applications and Server Management */}
      <section className="bg-white rounded-lg p-5 shadow-sm border border-[var(--page-border)]">
        <div className="flex items-start">
          <div className="text-4xl mr-4">⚙️</div>
          <div>
            <h3 className="text-xl font-semibold text-[var(--foreground)] mb-2">
              Backend Services for Applications and Server Management
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Maintain and manage backend services and server infrastructure for your applications.
              Reliable hosting, monitoring, and maintenance ensuring optimal performance and uptime.
            </p>
          </div>
        </div>
      </section>

      {/* Automation Pipelines */}
      <section className="bg-white rounded-lg p-5 shadow-sm border border-[var(--page-border)]">
        <div className="flex items-start">
          <div className="text-4xl mr-4">🔄</div>
          <div>
            <h3 className="text-xl font-semibold text-[var(--foreground)] mb-2">
              Automation Pipelines
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Streamlined CI/CD pipelines for automated deployment, testing, and infrastructure provisioning.
              Reduce manual processes and accelerate development workflows.
            </p>
          </div>
        </div>
      </section>

      {/* Integration of Cost Management Applications */}
      <section className="bg-white rounded-lg p-5 shadow-sm border border-[var(--page-border)]">
        <div className="flex items-start">
          <div className="text-4xl mr-4">💰</div>
          <div>
            <h3 className="text-xl font-semibold text-[var(--foreground)] mb-2">
              Integration of Cost Management Applications
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Monitor and optimize cloud spending with integrated cost management tools.
              Track resource usage, set budgets, and receive alerts to control infrastructure costs.
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
          title="Cloud Infrastructure"
          description="Scalable cloud infrastructure and deployment solutions to support your data-intensive applications. Build and manage robust, reliable infrastructure for your projects."
          icon="🏗️"
          content={content}
        />
      }
    />
  );
}

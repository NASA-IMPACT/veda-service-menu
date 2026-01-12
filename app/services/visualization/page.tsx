import BookSpread from '@/components/book/BookSpread';
import ServiceCategoriesMenu from '@/components/pages/ServiceCategoriesMenu';
import ServiceDetailPage from '@/components/pages/ServiceDetailPage';

export default function VisualizationPage() {
  const content = (
    <div className="space-y-6">
      {/* Creation of Tools to Dynamically Visualize Data */}
      <section className="bg-white rounded-lg p-5 shadow-sm border border-[var(--page-border)]">
        <div className="flex items-start">
          <div className="text-4xl mr-4">🗺️</div>
          <div>
            <h3 className="text-xl font-semibold text-[var(--foreground)] mb-2">
              Creation of Tools to Dynamically Visualize Data
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Build interactive visualization tools that bring Earth observation data to life.
              Dynamic dashboards, map interfaces, and data exploration tools tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Creation of Custom Components to Support Downstream Applications */}
      <section className="bg-white rounded-lg p-5 shadow-sm border border-[var(--page-border)]">
        <div className="flex items-start">
          <div className="text-4xl mr-4">🧩</div>
          <div>
            <h3 className="text-xl font-semibold text-[var(--foreground)] mb-2">
              Creation of Custom Components to Support Downstream Applications
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Develop reusable visualization components that integrate seamlessly into your applications.
              Custom charts, maps, and UI elements designed for your specific workflows.
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
          title="Custom Visualization Development"
          description="Create stunning, interactive visualizations and dashboards tailored to your data. Transform complex datasets into compelling visual stories."
          icon="📊"
          content={content}
        />
      }
    />
  );
}

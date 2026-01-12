import BookSpread from '@/components/book/BookSpread';
import ServiceCategoriesMenu from '@/components/pages/ServiceCategoriesMenu';
import ServiceDetailPage from '@/components/pages/ServiceDetailPage';

export default function WebsiteManagementPage() {
  const content = (
    <div className="space-y-6">
      {/* Custom Website Design */}
      <section className="bg-white rounded-lg p-5 shadow-sm border border-[var(--page-border)]">
        <div className="flex items-start">
          <div className="text-4xl mr-4">🎨</div>
          <div>
            <h3 className="text-xl font-semibold text-[var(--foreground)] mb-2">
              Custom Website Design
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Design and develop custom websites tailored to your organization's brand and goals.
              Modern, responsive designs that effectively communicate your mission and engage your audience.
            </p>
          </div>
        </div>
      </section>

      {/* Content Management System (CMS) Integration */}
      <section className="bg-white rounded-lg p-5 shadow-sm border border-[var(--page-border)]">
        <div className="flex items-start">
          <div className="text-4xl mr-4">📝</div>
          <div>
            <h3 className="text-xl font-semibold text-[var(--foreground)] mb-2">
              Content Management System (CMS) Integration
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Implement and configure CMS platforms that empower your team to manage content independently.
              Easy-to-use systems for updating pages, publishing stories, and maintaining your web presence.
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
          title="Website Management"
          description="Professional web development and management services. Build, maintain, and optimize engaging web platforms for your scientific communication and outreach needs."
          icon="🌐"
          content={content}
        />
      }
    />
  );
}

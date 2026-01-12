import BookSpread from '@/components/book/BookSpread';
import ServiceCategoriesMenu from '@/components/pages/ServiceCategoriesMenu';
import ServiceDetailPage from '@/components/pages/ServiceDetailPage';

export default function UserServicesPage() {
  const content = (
    <div className="space-y-6">
      {/* Jupyter Notebooks Showcasing Data Interactions for Trainings */}
      <section className="bg-white rounded-lg p-5 shadow-sm border border-[var(--page-border)]">
        <div className="flex items-start">
          <div className="text-4xl mr-4">📓</div>
          <div>
            <h3 className="text-xl font-semibold text-[var(--foreground)] mb-2">
              Jupyter Notebooks Showcasing Data Interactions for Trainings
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Interactive Jupyter notebooks demonstrating data access, analysis, and visualization techniques.
              Hands-on training materials that help users learn by example and accelerate their projects.
            </p>
          </div>
        </div>
      </section>

      {/* User Community Forums */}
      <section className="bg-white rounded-lg p-5 shadow-sm border border-[var(--page-border)]">
        <div className="flex items-start">
          <div className="text-4xl mr-4">💬</div>
          <div>
            <h3 className="text-xl font-semibold text-[var(--foreground)] mb-2">
              User Community Forums (GitHub/Discourse)
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Connect with the VEDA community through GitHub discussions and Discourse forums.
              Share knowledge, ask questions, and collaborate with other users and VEDA team members.
            </p>
          </div>
        </div>
      </section>

      {/* Help Desk Support */}
      <section className="bg-white rounded-lg p-5 shadow-sm border border-[var(--page-border)]">
        <div className="flex items-start">
          <div className="text-4xl mr-4">🆘</div>
          <div>
            <h3 className="text-xl font-semibold text-[var(--foreground)] mb-2">
              Help Desk Support
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Direct support from VEDA experts for technical issues and questions.
              Timely assistance to help you overcome challenges and maximize your use of VEDA services.
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
          title="User Services"
          description="Dedicated user support and assistance services. Get the help you need to make the most of VEDA's tools, data, and capabilities with expert guidance."
          icon="🤝"
          content={content}
        />
      }
    />
  );
}

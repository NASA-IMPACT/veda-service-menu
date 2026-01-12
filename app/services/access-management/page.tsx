import BookSpread from '@/components/book/BookSpread';
import ServiceCategoriesMenu from '@/components/pages/ServiceCategoriesMenu';
import ServiceDetailPage from '@/components/pages/ServiceDetailPage';

export default function AccessManagementPage() {
  const content = (
    <div className="space-y-6">
      {/* Single Sign-On (SSO) with Keycloak */}
      <section className="bg-white rounded-lg p-5 shadow-sm border border-[var(--page-border)]">
        <div className="flex items-start">
          <div className="text-4xl mr-4">🔑</div>
          <div>
            <h3 className="text-xl font-semibold text-[var(--foreground)] mb-2">
              Single Sign-On (SSO) with Keycloak
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Secure access to collaborative environments through Keycloak SSO with individual protected workspaces.
              Centralized authentication that simplifies user management while maintaining strong security controls.
            </p>
          </div>
        </div>
      </section>

      {/* Recommendations for GitHub Repository Management and Security */}
      <section className="bg-white rounded-lg p-5 shadow-sm border border-[var(--page-border)]">
        <div className="flex items-start">
          <div className="text-4xl mr-4">🛡️</div>
          <div>
            <h3 className="text-xl font-semibold text-[var(--foreground)] mb-2">
              Recommendations for GitHub Repository Management and Security
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Best practices and guidance for securing GitHub repositories and managing access permissions.
              Security standards, branch protection, and access controls to safeguard your code and data.
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
          title="Access Management"
          description="Secure access control and authentication services. Manage user permissions, credentials, and access rights with enterprise-grade security solutions."
          icon="🔐"
          content={content}
        />
      }
    />
  );
}

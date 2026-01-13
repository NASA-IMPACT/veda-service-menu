import BookSpread from '@/components/book/BookSpread';
import PersonaProfilePage from '@/components/pages/PersonaProfilePage';
import PersonaBundlePage from '@/components/pages/PersonaBundlePage';

export default function InfrastructureIanPage() {
  return (
    <BookSpread
      leftPage={
        <PersonaProfilePage
          name="Infrastructure Ian"
          subtitle="The Platform Architect"
          icon="⚙️"
          role="DevOps Engineer / Cloud Architect"
          description="Infrastructure Ian keeps the lights on. He manages AWS resources, Terraform configurations, and CI/CD pipelines that power data services. Ian needs infrastructure that is well-documented, easily reproducible, and cost-transparent. He values automation, monitoring, and quick deployments without downtime."
          keyNeeds={[
            'AWS/Terraform/CI/CD management services with infrastructure-as-code',
            'Apache Airflow for orchestrating reusable data workflows',
            'Grafana integration for cost monitoring and management',
            'Modular, re-deployable components for rapid updates',
            'Access management via Keycloak or GitHub groups',
          ]}
          painPoints={[
            'Unpredictable cloud costs that blow budgets',
            'Technical debt from poorly documented legacy systems',
            'Balancing security requirements with user accessibility',
          ]}
        />
      }
      rightPage={
        <PersonaBundlePage
          bundleName="Platform Operations"
          bundleDescription="Provides the DevOps foundation for reliable, cost-effective data services. Includes infrastructure management, workflow orchestration, monitoring, and access control to keep platforms running smoothly."
          coreServices={[
            {
              category: 'Cloud Infrastructure',
              services: ['AWS/Terraform/CI/CD management', 'Re-deployable components', 'Apache Airflow workflows'],
              link: '/services/cloud-infrastructure',
            },
            {
              category: 'Algorithm Development & Data Integration',
              services: ['Scientific workflow orchestration', 'Version-controlled environments'],
              link: '/services/algorithm-development',
            },
            {
              category: 'Cloud Computing',
              services: ['Infrastructure monitoring', 'Grafana cost management'],
              link: '/services/cloud-computing',
            },
            {
              category: 'Access Management',
              services: ['Keycloak SSO', 'GitHub groups authorization'],
              link: '/services/access-management',
            },
          ]}
        />
      }
    />
  );
}

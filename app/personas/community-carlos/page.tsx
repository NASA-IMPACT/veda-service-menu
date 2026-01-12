import BookSpread from '@/components/book/BookSpread';
import PersonaProfilePage from '@/components/pages/PersonaProfilePage';
import PersonaBundlePage from '@/components/pages/PersonaBundlePage';

export default function CommunityCarlosPage() {
  return (
    <BookSpread
      leftPage={
        <PersonaProfilePage
          name="Community Carlos"
          subtitle="The Collaborative Connector"
          icon="🌱"
          role="Graduate Student / Early-Career Researcher / Educator"
          description="Community Carlos is eager to learn but often overwhelmed by the complexity of geospatial data ecosystems. He benefits enormously from example notebooks, community forums, and accessible documentation. Carlos represents the next generation of data users and needs low barriers to entry."
          keyNeeds={[
            'JupyterHub access with pre-configured environments (no local setup required)',
            'Curated Jupyter Notebooks with step-by-step tutorials',
            'Help desk support for troubleshooting',
            'Community forums (GitHub Discussions, Discourse) for peer learning',
            'GitHub-managed documentation and learning resources',
          ]}
          painPoints={[
            'Steep learning curve for cloud-native geospatial workflows',
            'Difficulty knowing where to start or what questions to ask',
            'Limited computing resources at their institution',
          ]}
        />
      }
      rightPage={
        <PersonaBundlePage
          bundleName="Community Launchpad"
          bundleDescription="Lowers barriers to entry for newcomers to cloud-native geospatial analysis. Combines accessible computing environments, curated learning materials, and community support channels to help the next generation of users get started."
          coreServices={[
            {
              category: 'Cloud Computing',
              services: ['JupyterHub access', 'Pre-configured environments'],
              link: '/services/cloud-computing',
            },
            {
              category: 'Content Curation',
              services: ['Tutorial Jupyter Notebooks', 'GitHub Pages documentation'],
              link: '/services/content-curation',
            },
            {
              category: 'User Services',
              services: ['Help desk support', 'GitHub Discussions', 'Discourse forums'],
              link: '/services/user-services',
            },
          ]}
        />
      }
    />
  );
}

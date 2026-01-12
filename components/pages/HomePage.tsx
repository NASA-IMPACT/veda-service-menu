'use client';

import Page from '../book/Page';
import ServiceButton from '../book/ServiceButton';
import PersonaCard from '../book/PersonaCard';

export default function HomePage() {
  const services = [
    {
      title: 'Data Services',
      href: '/services/data-services',
      description: 'Access and integrate Earth observation data and APIs',
    },
    {
      title: 'Cloud Infrastructure',
      href: '/services/cloud-infrastructure',
      description: 'Scalable cloud infrastructure and deployment solutions',
    },
    {
      title: 'Custom Visualization Development',
      href: '/services/visualization',
      description: 'Create custom data visualizations and dashboards',
    },
    {
      title: 'Website Management',
      href: '/services/website-management',
      description: 'Professional web development and management services',
    },
    {
      title: 'Content Curation',
      href: '/services/content-curation',
      description: 'Expert content curation and management solutions',
    },
    {
      title: 'User Services',
      href: '/services/user-services',
      description: 'Dedicated user support and assistance services',
    },
    {
      title: 'Cloud Computing',
      href: '/services/cloud-computing',
      description: 'High-performance cloud computing resources',
    },
    {
      title: 'Access Management',
      href: '/services/access-management',
      description: 'Secure access control and authentication services',
    },
  ];

  const personas = [
    {
      name: 'Data Scientist',
      description: 'Analyzes large datasets and builds models',
      icon: '🔬',
    },
    {
      name: 'Application Developer',
      description: 'Builds applications using VEDA APIs and tools',
      icon: '💻',
    },
    {
      name: 'Earth Scientist',
      description: 'Studies Earth systems and environmental data',
      icon: '🌍',
    },
    {
      name: 'Decision Maker',
      description: 'Uses insights for policy and strategic decisions',
      icon: '📊',
    },
    {
      name: 'Educator',
      description: 'Teaches and creates educational content',
      icon: '👨‍🏫',
    },
  ];

  return (
    <Page>
      <div className="flex flex-col h-full">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-[var(--foreground)] mb-4 tracking-wide">
            VEDA Service Menu
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Welcome to the Visualization, Exploration, and Data Analysis (VEDA) Service Menu.
            Explore our comprehensive suite of services designed to support your data-driven projects
            and research initiatives.
          </p>
        </div>

        {/* Service Categories Section */}
        <div className="flex-1 mb-8">
          <h2 className="text-2xl font-semibold text-[var(--accent)] mb-6 text-center">
            Service Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
            {services.map((service) => (
              <ServiceButton
                key={service.href}
                title={service.title}
                href={service.href}
                description={service.description}
              />
            ))}
          </div>
        </div>

        {/* User Personas Section */}
        <div className="border-t-2 border-[var(--page-border)] pt-6">
          <h2 className="text-2xl font-semibold text-[var(--accent)] mb-6 text-center">
            Who We Serve
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {personas.map((persona) => (
              <PersonaCard
                key={persona.name}
                name={persona.name}
                description={persona.description}
                icon={persona.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </Page>
  );
}

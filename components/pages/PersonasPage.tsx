'use client';

import PersonaCard from '../book/PersonaCard';

const personas = [
  {
    name: 'Data Dana',
    description: 'Research scientist who needs cloud-optimized data and scalable computing for analysis',
    icon: '🔬',
    href: '/personas/data-dana',
  },
  {
    name: 'Publisher Pete',
    description: 'Program manager making agency datasets publicly accessible and discoverable',
    icon: '📊',
    href: '/personas/publisher-pete',
  },
  {
    name: 'Visualizer Vicky',
    description: 'Frontend developer building compelling interactive visualizations for broad audiences',
    icon: '🎨',
    href: '/personas/visualizer-vicky',
  },
  {
    name: 'Infrastructure Ian',
    description: 'DevOps engineer deploying reliable, cost-effective cloud infrastructure',
    icon: '⚙️',
    href: '/personas/infrastructure-ian',
  },
  {
    name: 'Community Carlos',
    description: 'Early-career researcher learning satellite data analysis and connecting with the community',
    icon: '🌱',
    href: '/personas/community-carlos',
  },
];

export default function PersonasPage() {
  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-[var(--foreground)] mb-3">
          Who We Serve
        </h2>
        <p className="text-lg text-gray-700">
          VEDA supports a diverse community of users with varying needs and expertise
        </p>
      </div>

      {/* Personas Grid */}
      <div className="flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 gap-6">
          {personas.map((persona) => (
            <PersonaCard
              key={persona.name}
              name={persona.name}
              description={persona.description}
              icon={persona.icon}
              href={persona.href}
            />
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 pt-4 border-t border-[var(--page-border)]">
        <p className="text-sm text-gray-600 text-center">
          Click on any persona to learn more about their needs and recommended service bundles
        </p>
      </div>
    </div>
  );
}

'use client';

import Link from 'next/link';

interface ServiceCategory {
  title: string;
  href: string;
  icon: string;
}

const services: ServiceCategory[] = [
  {
    title: 'Data Services',
    href: '/services/data-services',
    icon: '🛰️',
  },
  {
    title: 'Cloud Infrastructure',
    href: '/services/cloud-infrastructure',
    icon: '🏗️',
  },
  {
    title: 'Custom Visualization Development',
    href: '/services/visualization',
    icon: '📊',
  },
  {
    title: 'Website Management',
    href: '/services/website-management',
    icon: '🌐',
  },
  {
    title: 'Content Curation',
    href: '/services/content-curation',
    icon: '📚',
  },
  {
    title: 'User Services',
    href: '/services/user-services',
    icon: '🤝',
  },
  {
    title: 'Cloud Computing',
    href: '/services/cloud-computing',
    icon: '☁️',
  },
  {
    title: 'Algorithm Development & Data Integration',
    href: '/services/algorithm-development',
    icon: '🧬',
  },
  {
    title: 'Access Management',
    href: '/services/access-management',
    icon: '🔐',
  },
];

export default function ServiceCategoriesMenu() {
  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="text-center mb-4 flex-shrink-0">
        <h1 className="text-3xl font-bold text-[var(--foreground)] mb-2 tracking-wide">
          VEDA Service Menu
        </h1>
        <p className="text-base text-gray-700 leading-snug">
          Explore our comprehensive suite of services
        </p>
      </div>

      {/* Service Categories */}
      <div className="flex-1 flex flex-col min-h-0">
        <h2 className="text-xl font-semibold text-[var(--accent)] mb-3 border-b-2 border-[var(--page-border)] pb-2 flex-shrink-0">
          Service Categories
        </h2>
        <nav className="space-y-2 flex-1 min-h-0">
          {services.map((service, index) => (
            <Link
              key={service.href}
              href={service.href}
              className="group flex items-center p-2.5 rounded-lg border border-[var(--page-border)] bg-white/40 hover:bg-white hover:shadow-lg transition-all duration-300 hover:scale-102 hover:border-[var(--button-primary)]"
            >
              <span className="text-2xl mr-3">{service.icon}</span>
              <div className="flex-1">
                <span className="text-base font-semibold text-[var(--foreground)] group-hover:text-[var(--button-primary)] transition-colors">
                  {index + 1}. {service.title}
                </span>
              </div>
              <span className="text-[var(--button-primary)] opacity-0 group-hover:opacity-100 transition-opacity text-lg">
                →
              </span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Footer note */}
      <div className="mt-3 pt-3 border-t border-[var(--page-border)] flex-shrink-0">
        <p className="text-xs text-gray-600 text-center italic">
          Select a service to learn more
        </p>
      </div>
    </div>
  );
}

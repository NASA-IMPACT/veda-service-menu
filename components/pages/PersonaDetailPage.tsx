'use client';

import Link from 'next/link';

interface PersonaDetailPageProps {
  name: string;
  subtitle: string;
  icon: string;
  role: string;
  description: string;
  keyNeeds: string[];
  painPoints: string[];
  bundleName: string;
  bundleDescription: string;
  coreServices: {
    category: string;
    services: string[];
    link: string;
  }[];
}

export default function PersonaDetailPage({
  name,
  subtitle,
  icon,
  role,
  description,
  keyNeeds,
  painPoints,
  bundleName,
  bundleDescription,
  coreServices,
}: PersonaDetailPageProps) {
  return (
    <div className="book-spread">
      {/* Left Page - Persona Profile */}
      <div className="page page-left">
        <div className="h-full flex flex-col">
          {/* Back button */}
          <div className="mb-6">
            <Link
              href="/"
              className="inline-flex items-center text-[var(--button-primary)] hover:text-[var(--button-hover)] transition-colors font-semibold"
            >
              ← Return to Home Page
            </Link>
          </div>

          {/* Persona Header */}
          <div className="text-center mb-6 pb-4 border-b-2 border-[var(--page-border)]">
            <div className="text-6xl mb-3">{icon}</div>
            <h1 className="text-3xl font-bold text-[var(--foreground)] mb-2">
              {name}
            </h1>
            <p className="text-lg text-[var(--accent)] italic">{subtitle}</p>
          </div>

          {/* Role */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-[var(--foreground)] mb-2">Role</h2>
            <p className="text-gray-700">{role}</p>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-[var(--foreground)] mb-2">Description</h2>
            <p className="text-gray-700 leading-relaxed">{description}</p>
          </div>

          {/* Key Needs */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-[var(--foreground)] mb-3">Key Needs</h2>
            <ul className="space-y-2">
              {keyNeeds.map((need, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-[var(--button-primary)] mr-2">✓</span>
                  <span className="text-gray-700">{need}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pain Points */}
          <div>
            <h2 className="text-xl font-semibold text-[var(--foreground)] mb-3">Pain Points</h2>
            <ul className="space-y-2">
              {painPoints.map((point, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Right Page - Service Bundle */}
      <div className="page page-right">
        <div className="h-full flex flex-col">
          {/* Bundle Header */}
          <div className="mb-6 pb-4 border-b-2 border-[var(--page-border)]">
            <h2 className="text-2xl font-bold text-[var(--foreground)] mb-2">
              {bundleName}
            </h2>
            <p className="text-gray-700 leading-relaxed">{bundleDescription}</p>
          </div>

          {/* Core Services */}
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-[var(--foreground)] mb-4">
              Bundled Core Services
            </h3>
            <div className="space-y-4">
              {coreServices.map((service, index) => (
                <div key={index} className="bg-white rounded-lg p-4 border border-[var(--page-border)] hover:shadow-md transition-shadow">
                  <Link href={service.link} className="block">
                    <h4 className="text-lg font-semibold text-[var(--button-primary)] hover:text-[var(--button-hover)] mb-2 transition-colors">
                      {service.category} →
                    </h4>
                    <ul className="space-y-1">
                      {service.services.map((item, idx) => (
                        <li key={idx} className="text-sm text-gray-600 ml-4">
                          • {item}
                        </li>
                      ))}
                    </ul>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

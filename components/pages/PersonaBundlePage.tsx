'use client';

import Link from 'next/link';

interface PersonaBundlePageProps {
  bundleName: string;
  bundleDescription: string;
  coreServices: {
    category: string;
    services: string[];
    link: string;
  }[];
}

export default function PersonaBundlePage({
  bundleName,
  bundleDescription,
  coreServices,
}: PersonaBundlePageProps) {
  return (
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
  );
}

'use client';

import Link from 'next/link';

interface ServiceDetailPageProps {
  title: string;
  description: string;
  icon?: string;
  content?: React.ReactNode;
}

export default function ServiceDetailPage({
  title,
  description,
  icon = '📋',
  content
}: ServiceDetailPageProps) {
  return (
    <div className="h-full flex flex-col">
      {/* Home button */}
      <div className="mb-6">
        <Link
          href="/"
          className="inline-flex items-center text-[var(--button-primary)] hover:text-[var(--button-hover)] transition-colors font-semibold"
        >
          ← Return to Home Page
        </Link>
      </div>

      {/* Service Header */}
      <div className="mb-8 pb-6 border-b-2 border-[var(--page-border)]">
        <div className="flex items-center mb-4">
          <div className="text-6xl mr-5">{icon}</div>
          <h1 className="text-4xl font-bold text-[var(--foreground)]">
            {title}
          </h1>
        </div>
        <p className="text-lg text-gray-700 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Content Area */}
      <div className="flex-1">
        {content ? (
          content
        ) : (
          <div className="bg-white/30 border-2 border-dashed border-[var(--page-border)] rounded-lg p-8 h-full flex items-center justify-center">
            <div className="text-center">
              <p className="text-xl text-gray-600 mb-4">
                Content for this service category will be added here.
              </p>
              <p className="text-gray-500">
                This page is ready for detailed service information, offerings, and resources.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

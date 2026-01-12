'use client';

import Link from 'next/link';
import Page from '../book/Page';

interface ServicePageProps {
  title: string;
  description: string;
  icon?: string;
}

export default function ServicePage({ title, description, icon = '📋' }: ServicePageProps) {
  return (
    <Page>
      <div className="flex flex-col h-full">
        {/* Back button */}
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center text-[var(--button-primary)] hover:text-[var(--button-hover)] transition-colors"
          >
            ← Back to Menu
          </Link>
        </div>

        {/* Service Header */}
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">{icon}</div>
          <h1 className="text-4xl font-bold text-[var(--foreground)] mb-4">
            {title}
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        {/* Content Area - Placeholder */}
        <div className="flex-1 bg-white/30 border-2 border-dashed border-[var(--page-border)] rounded-lg p-8 flex items-center justify-center">
          <div className="text-center">
            <p className="text-xl text-gray-600 mb-4">
              Content for this service category will be added here.
            </p>
            <p className="text-gray-500">
              This page is ready for detailed service information, offerings, and resources.
            </p>
          </div>
        </div>
      </div>
    </Page>
  );
}

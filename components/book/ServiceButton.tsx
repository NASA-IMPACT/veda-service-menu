'use client';

import Link from 'next/link';

interface ServiceButtonProps {
  title: string;
  href: string;
  description?: string;
}

export default function ServiceButton({ title, href, description }: ServiceButtonProps) {
  return (
    <Link
      href={href}
      className="group relative block p-6 bg-white border-2 border-[var(--page-border)] rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 hover:border-[var(--button-primary)]"
    >
      <div className="flex flex-col items-center text-center">
        <h3 className="text-xl font-semibold text-[var(--foreground)] mb-2 group-hover:text-[var(--button-primary)] transition-colors">
          {title}
        </h3>
        {description && (
          <p className="text-sm text-gray-600">{description}</p>
        )}
      </div>
      <div className="absolute bottom-2 right-2 text-[var(--button-primary)] opacity-0 group-hover:opacity-100 transition-opacity">
        →
      </div>
    </Link>
  );
}

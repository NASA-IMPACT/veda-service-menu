'use client';

import Link from 'next/link';

interface PersonaCardProps {
  name: string;
  description: string;
  icon?: string;
  href?: string;
}

export default function PersonaCard({ name, description, icon = '👤', href }: PersonaCardProps) {
  const content = (
    <>
      <div className="text-3xl mr-3 flex-shrink-0">{icon}</div>
      <div className="flex-1">
        <h4 className="text-lg font-semibold text-[var(--foreground)] mb-1 group-hover:text-[var(--button-primary)] transition-colors">
          {name}
        </h4>
        <p className="text-sm text-gray-600 leading-snug">{description}</p>
      </div>
      {href && (
        <div className="text-[var(--button-primary)] opacity-0 group-hover:opacity-100 transition-opacity text-xl ml-3">
          →
        </div>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className="group flex items-start p-3 bg-white/50 border border-[var(--page-border)] rounded-lg hover:bg-white transition-all duration-300 hover:shadow-lg hover:scale-102 hover:border-[var(--button-primary)] cursor-pointer">
        {content}
      </Link>
    );
  }

  return (
    <div className="flex items-start p-3 bg-white/50 border border-[var(--page-border)] rounded-lg hover:bg-white transition-all duration-300 hover:shadow-md">
      {content}
    </div>
  );
}

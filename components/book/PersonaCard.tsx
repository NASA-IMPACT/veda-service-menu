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
      <div className="text-5xl mr-5 flex-shrink-0">{icon}</div>
      <div className="flex-1">
        <h4 className="text-xl font-semibold text-[var(--foreground)] mb-2 group-hover:text-[var(--button-primary)] transition-colors">
          {name}
        </h4>
        <p className="text-base text-gray-600 leading-relaxed">{description}</p>
      </div>
      {href && (
        <div className="text-[var(--button-primary)] opacity-0 group-hover:opacity-100 transition-opacity text-2xl ml-4">
          →
        </div>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className="group flex items-start p-5 bg-white/50 border border-[var(--page-border)] rounded-lg hover:bg-white transition-all duration-300 hover:shadow-lg hover:scale-102 hover:border-[var(--button-primary)] cursor-pointer">
        {content}
      </Link>
    );
  }

  return (
    <div className="flex items-start p-5 bg-white/50 border border-[var(--page-border)] rounded-lg hover:bg-white transition-all duration-300 hover:shadow-md">
      {content}
    </div>
  );
}

'use client';

import Link from 'next/link';

interface PersonaProfilePageProps {
  name: string;
  subtitle: string;
  icon: string;
  role: string;
  description: string;
  keyNeeds: string[];
  painPoints: string[];
}

export default function PersonaProfilePage({
  name,
  subtitle,
  icon,
  role,
  description,
  keyNeeds,
  painPoints,
}: PersonaProfilePageProps) {
  return (
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
  );
}

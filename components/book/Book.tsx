'use client';

import { ReactNode } from 'react';

interface BookProps {
  children: ReactNode;
}

export default function Book({ children }: BookProps) {
  return (
    <div className="book-container">
      <div className="book">
        {children}
      </div>
    </div>
  );
}

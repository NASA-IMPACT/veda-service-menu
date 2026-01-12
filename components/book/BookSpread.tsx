'use client';

import { ReactNode } from 'react';
import BookNavigation from './BookNavigation';

interface BookSpreadProps {
  leftPage: ReactNode;
  rightPage: ReactNode;
  isFlipping?: boolean;
}

export default function BookSpread({ leftPage, rightPage, isFlipping = false }: BookSpreadProps) {
  return (
    <div className="book-container">
      <div className="book">
        <div className="book-spread">
          {/* Left Page - Static */}
          <div className="page page-left">
            {leftPage}
          </div>

          {/* Book Spine */}
          <div className="book-spine" />

          {/* Right Page - Flippable */}
          <div className={`page page-right ${isFlipping ? 'flipping' : ''}`}>
            {rightPage}
          </div>
        </div>

        {/* Book Navigation */}
        <div className="px-6 pb-6">
          <BookNavigation />
        </div>
      </div>
    </div>
  );
}

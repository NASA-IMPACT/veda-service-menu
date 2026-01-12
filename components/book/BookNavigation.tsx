'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getNextPage, getPreviousPage } from '@/lib/navigation';

export default function BookNavigation() {
  const pathname = usePathname();
  const previousPage = getPreviousPage(pathname);
  const nextPage = getNextPage(pathname);

  return (
    <div className="flex justify-between items-center mt-6 pt-4 border-t border-[var(--page-border)]">
      {/* Previous Page Button */}
      <div className="flex-1">
        {previousPage ? (
          <Link
            href={previousPage.path}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-[var(--page-border)] hover:bg-[var(--button-primary)] hover:text-white hover:border-[var(--button-primary)] transition-all duration-300 shadow-sm hover:shadow-md group"
          >
            <span className="text-2xl group-hover:animate-pulse">←</span>
            <div className="text-left">
              <div className="text-xs text-gray-500 group-hover:text-white/80">Previous</div>
              <div className="font-semibold text-sm">{previousPage.icon} {previousPage.title}</div>
            </div>
          </Link>
        ) : (
          <div></div>
        )}
      </div>

      {/* Page indicator */}
      <div className="flex-shrink-0 px-4">
        <div className="flex gap-1">
          {[...Array(9)].map((_, i) => {
            const isCurrentPage = pathname === (i === 0 ? '/' : `/services/${['data-services', 'cloud-infrastructure', 'visualization', 'website-management', 'content-curation', 'user-services', 'cloud-computing', 'access-management'][i - 1]}`);
            return (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-all ${
                  isCurrentPage
                    ? 'bg-[var(--button-primary)] scale-125'
                    : 'bg-gray-300'
                }`}
              />
            );
          })}
        </div>
      </div>

      {/* Next Page Button */}
      <div className="flex-1 flex justify-end">
        {nextPage ? (
          <Link
            href={nextPage.path}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-[var(--page-border)] hover:bg-[var(--button-primary)] hover:text-white hover:border-[var(--button-primary)] transition-all duration-300 shadow-sm hover:shadow-md group"
          >
            <div className="text-right">
              <div className="text-xs text-gray-500 group-hover:text-white/80">Next</div>
              <div className="font-semibold text-sm">{nextPage.icon} {nextPage.title}</div>
            </div>
            <span className="text-2xl group-hover:animate-pulse">→</span>
          </Link>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export interface PageInfo {
  path: string;
  title: string;
  icon: string;
}

export const pages: PageInfo[] = [
  {
    path: '/',
    title: 'Home',
    icon: '🏠',
  },
  {
    path: '/services/data-services',
    title: 'Data Services',
    icon: '🛰️',
  },
  {
    path: '/services/cloud-infrastructure',
    title: 'Cloud Infrastructure',
    icon: '🏗️',
  },
  {
    path: '/services/visualization',
    title: 'Custom Visualization Development',
    icon: '📊',
  },
  {
    path: '/services/website-management',
    title: 'Website Management',
    icon: '🌐',
  },
  {
    path: '/services/content-curation',
    title: 'Content Curation',
    icon: '📚',
  },
  {
    path: '/services/user-services',
    title: 'User Services',
    icon: '🤝',
  },
  {
    path: '/services/cloud-computing',
    title: 'Cloud Computing',
    icon: '☁️',
  },
  {
    path: '/services/algorithm-development',
    title: 'Algorithm Development & Data Integration',
    icon: '🧬',
  },
  {
    path: '/services/access-management',
    title: 'Access Management',
    icon: '🔐',
  },
];

export const personas: PageInfo[] = [
  {
    path: '/personas/data-dana',
    title: 'Data Dana',
    icon: '🔬',
  },
  {
    path: '/personas/publisher-pete',
    title: 'Publisher Pete',
    icon: '📊',
  },
  {
    path: '/personas/visualizer-vicky',
    title: 'Visualizer Vicky',
    icon: '🎨',
  },
  {
    path: '/personas/infrastructure-ian',
    title: 'Infrastructure Ian',
    icon: '⚙️',
  },
  {
    path: '/personas/community-carlos',
    title: 'Community Carlos',
    icon: '🌱',
  },
];

function isPersonaPath(path: string): boolean {
  return path.startsWith('/personas/');
}

function getPageArray(currentPath: string): PageInfo[] {
  return isPersonaPath(currentPath) ? personas : pages;
}

export function getCurrentPageIndex(currentPath: string): number {
  const pageArray = getPageArray(currentPath);
  return pageArray.findIndex(page => page.path === currentPath);
}

export function getNextPage(currentPath: string): PageInfo | null {
  const pageArray = getPageArray(currentPath);
  const currentIndex = getCurrentPageIndex(currentPath);
  if (currentIndex === -1 || currentIndex === pageArray.length - 1) {
    return null;
  }
  return pageArray[currentIndex + 1];
}

export function getPreviousPage(currentPath: string): PageInfo | null {
  const pageArray = getPageArray(currentPath);
  const currentIndex = getCurrentPageIndex(currentPath);
  if (currentIndex <= 0) {
    return null;
  }
  return pageArray[currentIndex - 1];
}

export const DASHBOARD_STATS = [
  { id: 'achievements', label: 'Achievement Points', value: '2,450' },
  { id: 'courses', label: 'Courses Completed', value: '12' },
  { id: 'rank', label: 'Community Rank', value: '#126' },
  { id: 'credits', label: 'Carbon Credits', value: '345' },
] as const;

export const HERO_STATS = [
  { id: 'members', number: 10000, label: 'Active Members', suffix: '+' },
  { id: 'trees', number: 50000, label: 'Trees Planted', suffix: '+' },
  { id: 'modules', number: 100, label: 'Course Modules', suffix: '+' },
] as const;

export const COURSES = [
  {
    id: 'blockchain-basics',
    title: 'Blockchain Fundamentals',
    description: 'Learn the basics of blockchain technology and its environmental applications',
    duration: '2 hours',
    level: 'Beginner',
    progress: 80,
  },
  {
    id: 'environmental-science',
    title: 'Environmental Science',
    description: 'Understand key environmental challenges and solutions',
    duration: '3 hours',
    level: 'Intermediate',
    progress: 60,
  },
  {
    id: 'sustainable-practices',
    title: 'Sustainable Practices',
    description: 'Discover practical ways to contribute to environmental conservation',
    duration: '2.5 hours',
    level: 'Beginner',
    progress: 40,
  },
] as const;
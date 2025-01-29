export const students = Array(33).fill(null).map((_, index) => ({
  id: index + 1,
  name: `Student ${index + 1}`,
  photo: '/Shivam.jpg', // Placeholder image
  batch: 'Kalvium 2023',
  bio: 'A passionate learner exploring full-stack development and modern technologies at Kalvium.',
  learning: ['MERN Stack', 'Data Structures', 'System Design', 'Problem Solving'],
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  university: 'NAAC A+ University',
  highlights: [
    'Building Portfolio Projects',
    'Learning Data Structures',
    'Participating in Hackathons'
  ]
}));
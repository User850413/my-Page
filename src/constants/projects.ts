export type ProjectsProps = {
  id: number;
  title: string;
  startDate: string;
  lastDate: string;
  tools: string[];
  point: string[];
  description: string;
  URL: string;
};

const PROJECTS = [
  {
    id: 1,
    title: '프로젝트 제목1',
    startDate: '2024.08.30',
    lastDate: '2024.09.30',
    tools: ['typescript', 'React', 'tailwind'],
    point: ['잘 만들었음', '신기함'],
    description:
      '아무말아무말아무말아무말아무말아무말아무말아무말아무말아무말아무말아무말아무말아무말말아무말아무말아무말아무말아무말아무말아무말아무말말아무말아무말아무말아무말아무말아무말아무말아무말',
    URL: 'https://github.com/Part4-Team13/Delimood',
  },
  {
    id: 2,
    title: '프로젝트 제목1',
    startDate: '2024.08.30',
    lastDate: '2024.09.30',
    tools: ['typescript', 'React', 'tailwind'],
    point: ['잘 만들었음', '신기함'],
    description:
      '아무말아무말아무말아무말아무말아무말아무말아무말아무말아무말아무말아무말아무말아무말말아무말아무말아무말아무말아무말아무말아무말아무말말아무말아무말아무말아무말아무말아무말아무말아무말',
    URL: 'https://github.com/Part4-Team13/Delimood',
  },
];

export default PROJECTS;

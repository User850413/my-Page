export type ProjectsProps = {
  id: number;
  title: string;
  startDate: string;
  lastDate: string;
  tools: string[];
  point: string[];
  description: string;
  URL: string;
  site: string;
  thumbnail: string;
};

const PROJECTS = [
  {
    id: 1,
    title: 'DeliMood',
    startDate: '2024.07.25',
    lastDate: '2024.08.29',
    tools: ['React', 'typescript', 'tailwind', 'mantine'],
    point: ['처음으로 JIRA를 이용해 프로젝트 관리', '간단한 최적화 시도'],
    description: '코드잇 스프린트 6기 심화 프로젝트입니다. tailwind를 처음으로 제대로 사용해 보았으며 적절한 소통 및 협업을 통해 무난하게 진행된 프로젝트였습니다.',
    URL: 'https://github.com/Part4-Team13/Delimood',
    site: 'https://6-4-13-delimood.vercel.app/',
    thumbnail: 'img_thumbnail_1.png',
  },
  {
    id: 2,
    title: 'My Page',
    startDate: '2024.09.01',
    lastDate: '2024.09.11',
    tools: ['React', 'typescript', 'tailwind', 'framer motion'],
    point: ['현재 페이지'],
    description:
      '이전 프로젝트 "DeliMood"의 기술스택을 이어받아 만든 포트폴리오 페이지입니다. 기초적인 애니메이션은 framer motion의 도움을 받았지만 Accordion 컴포넌트 및 Drawer 컴포넌트, Menu 컴포넌트 등 기본적으로 잘 쓰이는 UI 컴포넌트들을 직접 만들어보는 시도를 했습니다.',
    URL: 'https://github.com/User850413/my-Page',
    site: 'https://6-4-13-delimood.vercel.app/',
    thumbnail: 'img_thumbnail_1.png',
  },
];

export default PROJECTS;

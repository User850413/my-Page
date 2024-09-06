import Intro from './Intro';
import MainAnimation from './MainAnimation';
import Skills from './Skills';

export interface SkillGraphProps {
  skill: string;
  percent: number;
}

function Main() {
  return (
    <div className='w-screen'>
      <MainAnimation />
      <Intro />
      <Skills />
    </div>
  );
}

export default Main;

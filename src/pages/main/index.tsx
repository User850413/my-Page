import { useNavigate } from 'react-router-dom';

import { RotationWheelLeft, RotationWheelRight } from '../../components/RotationWheel';
import Intro from './Intro';
import MainAnimation from './MainAnimation';
import Skills from './Skills';

export interface SkillGraphProps {
  skill: string;
  percent: number;
}

function Main() {
  const navigate = useNavigate();

  return (
    <div className='relative w-screen overflow-hidden'>
      <MainAnimation />
      <Intro />
      <Skills />
      <a onClick={() => navigate('/projects')} className='absolute bottom-[94px] left-1/2 z-10 -translate-x-1/2 transform cursor-pointer text-[18px] font-light hover:underline tablet:text-[24px]'>
        want to see my works?
      </a>
      <RotationWheelRight top={176} right={-66} />
      <RotationWheelLeft top={950} left={-81} />
      <RotationWheelRight top={'calc(100% - 700px)'} right={0} />
    </div>
  );
}

export default Main;

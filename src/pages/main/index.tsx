import { RotationWheelLeft, RotationWheelRight } from '../../components/RotationWheel';
import Intro from './Intro';
import MainAnimation from './MainAnimation';
import Skills from './Skills';

export interface SkillGraphProps {
  skill: string;
  percent: number;
}

function Main() {
  return (
    <div className='relative w-screen overflow-hidden'>
      <MainAnimation />
      <Intro />
      <Skills />
      <RotationWheelRight top={176} right={-66} />
      <RotationWheelLeft top={950} left={-81} />
      <RotationWheelRight top={'calc(100% - 700px)'} right={0} />
    </div>
  );
}

export default Main;

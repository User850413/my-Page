import { motion } from 'framer-motion';

import { SkillGraphProps } from '.';
import ico_box from '../../assets/icons/ico_box.svg';
import SkillGraph from './SkillGraph';

const SKILLS: SkillGraphProps[] = [
  { skill: 'Javascript', percent: 60 },
  { skill: 'React', percent: 60 },
];

function Skills() {
  return (
    <section className='mx-auto mt-[130px] flex h-[1400px] w-[320px] flex-col items-center gap-[40px] pt-[158px] tablet:w-[688px] tablet:gap-[158px] desktop:w-[800px]'>
      <motion.span
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 1 }}
        className='flex cursor-default flex-col items-center gap-[15px] tablet:gap-[24px]'
      >
        <img src={ico_box} alt='skills' className='w-[80px] tablet:w-[114px]' />
        <span className='w-fit border-b-[1px] border-b-darkerText text-[28px] font-thin tablet:text-[32px]'>SKILLS</span>
      </motion.span>
      <ul className='flex w-full flex-col gap-[10px] tablet:gap-[24px]'>
        {SKILLS.map((skill, index) => (
          <li key={index}>
            <SkillGraph skill={skill.skill} percent={skill.percent} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;

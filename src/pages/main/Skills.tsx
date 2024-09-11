import { motion } from 'framer-motion';

import { SkillGraphProps } from '.';
import SkillGraph from './SkillGraph';
import ico_box from '/assets/icons/ico_box.svg';

const SKILLS: SkillGraphProps[] = [
  { skill: 'HTML5', percent: 80 },
  { skill: 'CSS', percent: 80 },
  { skill: 'Javascript', percent: 60 },
  { skill: 'React', percent: 60 },
  { skill: 'Typescript', percent: 60 },
  { skill: 'HTTP', percent: 20 },
];

function Skills() {
  return (
    <section className='mx-auto mb-[380px] mt-[130px] flex w-[320px] flex-col items-center gap-[40px] pt-[158px] tablet:w-[688px] tablet:gap-[158px] desktop:w-[800px]'>
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

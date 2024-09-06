import { motion } from 'framer-motion';

import { SkillGraphProps } from '.';

function SkillGraph({ skill, percent }: SkillGraphProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      viewport={{ once: true }}
      className='group relative z-20 flex w-full cursor-default flex-col items-start'
    >
      <span className='text-[20px] tablet:text-[40px]'>{skill}</span>
      <span className='relative h-[6px] w-full border-[1px] border-darker bg-bright tablet:h-[12px]'>
        <motion.span initial={{ width: 0 }} whileInView={{ width: `${percent}%` }} transition={{ delay: 0.8 }} viewport={{ once: true }} className='absolute left-0 top-0 h-full bg-darker' />
        <span
          style={{ left: `${percent}%` }}
          className='absolute top-[-40px] rounded-[5px] border-[1px] border-darker bg-bright p-[5px_15px] opacity-0 transition-opacity duration-100 group-hover:opacity-100'
        >
          {percent}%
        </span>
      </span>
    </motion.div>
  );
}

export default SkillGraph;

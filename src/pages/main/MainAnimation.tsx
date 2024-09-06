import { motion } from 'framer-motion';

import ico_wheel from '../../assets/icons/ico_wheel.svg';

function MainAnimation() {
  return (
    <div className='relative left-0 right-0 top-0 h-screen bg-bright'>
      <motion.span
        transition={{ duration: 1.5, ease: 'easeInOut' }}
        initial={{ x: '-50%', y: '-50%', rotate: 0 }}
        animate={{ rotate: [0, 50, -180, 0], opacity: [0, 1, 1, 1] }}
        className='absolute left-1/2 top-[127px] w-[76px] tablet:top-[280px] tablet:w-[200px] desktop:top-1/2 desktop:w-[350px]'
      >
        <img src={ico_wheel} alt='톱니' />
      </motion.span>
      <motion.span
        transition={{ duration: 0.5, delay: 0.5 }}
        initial={{ x: 0 }}
        animate={{ x: '-50%', opacity: [0, 0, 1] }}
        className='difference absolute left-1/2 top-[176px] w-max cursor-default text-[30px] font-black text-bright tablet:top-[527px] tablet:text-[60px] desktop:left-[630px] desktop:top-[216px] desktop:text-[120px]'
      >
        CHOI SOO HYEONG
      </motion.span>
      <motion.span
        transition={{ duration: 0.5, delay: 0.9 }}
        initial={{ x: '-100%' }}
        animate={{ x: `-50%`, opacity: [0, 0, 0, 1] }}
        className='difference cursor-defaults absolute left-1/2 top-[212px] text-[20px] font-black text-bright tablet:top-[584px] tablet:text-[60px] desktop:left-[300px] desktop:top-[330px] desktop:text-[80px]'
      >
        PORTFOLIO
      </motion.span>
      <motion.span
        transition={{ duration: 1 }}
        animate={{ opacity: [0, 1] }}
        initial={{ x: '-50%' }}
        className='absolute bottom-[60px] left-1/2 cursor-default border-b-[1px] border-b-darkerText text-[30px] font-thin text-darkerText tablet:text-[40px]'
      >
        FRONTEND
      </motion.span>
    </div>
  );
}

export default MainAnimation;

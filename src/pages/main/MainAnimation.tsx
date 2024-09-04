import { motion } from 'framer-motion';

import ico_wheel from '../../assets/icons/ico_wheel.svg';

function MainAnimation() {
  return (
    <div className='relative left-0 right-0 top-0 h-screen bg-bright'>
      <motion.span
        transition={{ duration: 1.5, ease: 'easeInOut' }}
        initial={{ x: '-50%', y: '-50%', rotate: 0 }}
        animate={{ rotate: [0, 50, -180, 0] }}
        className='absolute left-1/2 top-1/2 w-[350px]'
      >
        <img src={ico_wheel} alt='톱니' />
      </motion.span>
      <motion.span
        transition={{ duration: 0.5, delay: 0.5 }}
        animate={{ x: [200, 200, 0], opacity: [0, 0, 1] }}
        className='difference absolute left-[50px] top-[216px] cursor-default text-[30px] font-black text-bright tablet:text-[60px] desktop:text-[120px]'
      >
        CHOI SOO HYEONG
      </motion.span>
      <motion.span
        transition={{ duration: 0.5, delay: 0.9 }}
        animate={{ x: [-100, -100, -100, 0], opacity: [0, 0, 0, 1] }}
        className='difference absolute left-[50px] top-[330px] cursor-default text-[20px] font-black text-bright tablet:text-[60px] desktop:text-[80px]'
      >
        PORTFOLIO
      </motion.span>
    </div>
  );
}

export default MainAnimation;

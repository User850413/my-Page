import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import ico_wheel from '/assets/icons/ico_wheel.svg';

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className='absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform flex-col items-center gap-[10px]'>
      <motion.img
        initial={{ scale: 0.8 }}
        whileHover={{ rotate: 100, scale: 1 }}
        transition={{ ease: 'linear' }}
        src={ico_wheel}
        alt='톱니'
        className='w-[50px] cursor-pointer'
        onClick={() => navigate('/')}
      />
      <span className='cursor-default underline underline-offset-4'>존재하지 않는 페이지입니다!</span>
    </div>
  );
}

export default NotFound;

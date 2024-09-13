import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import ico_wheel from '/assets/icons/ico_wheel.svg';
import ico_wheel_big from '/assets/icons/ico_wheel_big.svg';

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className='relative h-screen overflow-hidden'>
      <img src={ico_wheel_big} alt='배경' className='difference absolute bottom-0 left-1/2 w-[545px] -translate-x-1/2 translate-y-1/2 desktop:bottom-[50%] desktop:w-[839px]' />
      <div className='absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform flex-col items-center gap-[20px]'>
        <span className='h-fit w-[200px] cursor-default border-b-[1px] border-b-darker text-center text-[40px] desktop:w-[307px] desktop:text-[120px]'>404</span>
        <motion.img
          initial={{ scale: 0.8 }}
          whileHover={{ rotate: 100, scale: 1 }}
          transition={{ ease: 'linear' }}
          src={ico_wheel}
          alt='톱니'
          className='w-[50px] cursor-pointer desktop:mt-[33px]'
          onClick={() => navigate('/')}
        />
        <span className='cursor-default'>페이지를 찾을 수 없습니다</span>
      </div>
      <a onClick={() => navigate('/')} className='absolute bottom-[40px] left-1/2 -translate-x-1/2 cursor-pointer text-[12px] underline underline-offset-4 desktop:bottom-[82px] desktop:text-[16px]'>
        메인으로 돌아가기
      </a>
    </div>
  );
}

export default NotFound;

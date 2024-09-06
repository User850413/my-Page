import { motion } from 'framer-motion';

import ico_star from '../../assets/icons/ico_star.svg';
import img_bg_pattern from '../../assets/images/img_bg_pattern.svg';

function Intro() {
  return (
    <section className='relative mt-[130px] flex h-[779px] w-full items-center bg-darker'>
      <div className='ml-auto mr-auto flex cursor-default flex-col items-center gap-[27px] tablet:gap-[60px] desktop:ml-[154px] desktop:flex-row desktop:gap-[46px]'>
        <span className='flex h-[80px] w-[80px] items-center justify-center rounded-full bg-bright tablet:h-[160px] tablet:w-[160px]'>
          <motion.img whileHover={{ scaleX: [1, 0, 1] }} initial={{ scaleX: 1 }} transition={{ duration: 1.5, ease: 'linear' }} className='h-[50px] tablet:h-[100px]' src={ico_star} alt='about' />
        </span>
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className='flex flex-col items-center gap-[7px] text-bright tablet:gap-[14px] desktop:items-start desktop:gap-[4px]'
        >
          <span className='w-fit border-b-[1px] border-b-bright text-[40px] font-thin tablet:text-[80px]'>ABOUT</span>
          <p className='w-[302px] break-keep text-center tablet:w-[466px] desktop:w-full desktop:text-left'>
            느리더라도 꾸준히 나아가는 개발자가 목표입니다.
            <br />
            설령 한 발자국이더라도 어제보다 나아간 오늘을, 오늘보다 나아간 내일을 살고 싶습니다.
          </p>
        </motion.div>
      </div>
      <span className='absolute top-[-130px] h-[130px] w-[1920px] overflow-x-hidden border-l-[1px] border-darker'>
        <motion.img
          src={img_bg_pattern}
          alt='배경 이미지'
          className='absolute h-[130px] w-[1920px]'
          initial={{ x: 0 }}
          animate={{ x: ['0%', '-100%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
        <motion.img
          src={img_bg_pattern}
          alt='배경 이미지'
          className='absolute h-[130px] w-[1920px]'
          initial={{ x: '100%' }}
          animate={{ x: ['100%', '0%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
      </span>
      <span className='absolute bottom-[-130px] h-[130px] w-[1920px] rotate-180 overflow-x-hidden border-l-[1px] border-darker'>
        <motion.img
          src={img_bg_pattern}
          alt='배경 이미지'
          className='absolute h-[130px] w-[1920px]'
          initial={{ x: 0 }}
          animate={{ x: ['0%', '-100%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
        <motion.img
          src={img_bg_pattern}
          alt='배경 이미지'
          className='absolute h-[130px] w-[1920px]'
          initial={{ x: '100%' }}
          animate={{ x: ['100%', '0%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
      </span>
    </section>
  );
}

export default Intro;

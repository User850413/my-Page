import { useNavigate } from 'react-router-dom';

import ico_wheel from '/assets/icons/ico_wheel.svg';
import ico_wheel_big from '/assets/icons/ico_wheel_big.svg';

function Contact() {
  const navigate = useNavigate();

  const onClickGitHub = () => {
    window.open('https://github.com/User850413', '_blank');
  };

  return (
    <>
      <img src={ico_wheel_big} alt='배경 이미지' className='difference absolute left-1/2 top-1/2 w-[172px] -translate-x-1/2 -translate-y-1/2 desktop:w-[354px]' />
      <div className='absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center text-[25px] desktop:text-[40px]'>
        <span className='group flex cursor-pointer items-center gap-[10px] text-center'>
          <img src={ico_wheel} className='hidden w-[24px] group-hover:block desktop:w-[30px]' alt='톱니' />
          <span> csyou1228@gmail.com</span>
          <img src={ico_wheel} alt='톱니' className='hidden w-[24px] group-hover:block desktop:w-[30px]' />
        </span>
        <span className='group flex cursor-pointer items-center gap-[10px]' onClick={onClickGitHub}>
          <img src={ico_wheel} alt='톱니' className='hidden w-[24px] group-hover:block desktop:w-[30px]' />
          <span>GITHUB</span>
          <img src={ico_wheel} alt='톱니' className='hidden w-[24px] group-hover:block desktop:w-[30px]' />
        </span>
      </div>
      <a className='absolute bottom-[94px] left-1/2 z-10 -translate-x-1/2 transform cursor-pointer text-[18px] font-light hover:underline tablet:text-[24px]' onClick={() => navigate('/')}>
        메인 페이지로
      </a>
    </>
  );
}

export default Contact;

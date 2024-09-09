import { useEffect, useState } from 'react';

import ico_goToTop from '../../assets/icons/ico_goToTop.svg';

function GoUpButton() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isVisible) {
    return (
      <button onClick={goToTop} className='fixed bottom-[40px] right-[40px] flex h-[40px] w-[40px] items-center justify-center rounded-full bg-darker tablet:h-[60px] tablet:w-[60px]'>
        <img src={ico_goToTop} className='h-[20px] tablet:h-[30px]' alt='가장 위로' />
      </button>
    );
  } else {
    return null;
  }
}

export default GoUpButton;

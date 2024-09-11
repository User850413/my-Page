import { useState } from 'react';

import ico_arrow_left from '/assets/icons/ico_arrow_left.svg';
import ico_arrow_right from '/assets/icons/ico_arrow_right.svg';
import ico_moon from '/assets/icons/ico_moon.svg';
import ico_sun from '/assets/icons/ico_sun.svg';

interface SelectionAttributes {
  id: number;
  image: string;
  desc: string;
}

interface SelectionProps {
  selections: SelectionAttributes[];
}

const Selection = ({ selections }: SelectionProps) => {
  const [item, setItem] = useState<number>(1);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (1 < item) {
      setItem((prev) => prev - 1);
    } else {
      setItem(selections.length);
    }
  };
  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (item < selections.length) {
      setItem((prev) => prev + 1);
    } else {
      setItem(1);
    }
  };

  return (
    <div className='flex w-fit items-center gap-[12px]'>
      <button className='w-[6px]' onClick={handlePrev}>
        <img src={ico_arrow_left} alt='이전 아이템으로' />
      </button>
      <span className='h-[20px] w-[20px] flex-shrink-0'>
        <img src={selections[item - 1].image} alt={selections[item - 1].desc} className='h-full w-full object-contain' />
      </span>
      <button className='w-[6px]' onClick={handleNext}>
        <img src={ico_arrow_right} alt='다음 아이템으로' />
      </button>
    </div>
  );
};

function ThemeSelection() {
  const THEMES: SelectionAttributes[] = [
    {
      id: 1,
      image: ico_sun,
      desc: '밝음',
    },
    {
      id: 2,
      image: ico_moon,
      desc: '어두움',
    },
  ];

  return <Selection selections={THEMES} />;
}

function LangSelection() {
  const LANGS: SelectionAttributes[] = [
    { id: 1, image: ico_moon, desc: '한글' },
    { id: 2, image: ico_sun, desc: '영어' },
  ];
  return <Selection selections={LANGS} />;
}

export { ThemeSelection, LangSelection };

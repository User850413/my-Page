import { motion, useScroll, useTransform } from 'framer-motion';

import ico_wheel from '../assets/icons/ico_wheel_big.svg';

function RotationWheelLeft({ top, left }: { top: number | string; left: number | string }) {
  const { scrollY } = useScroll();
  const slowerRotate = useTransform(scrollY, (value) => value / 10);

  return <motion.img src={ico_wheel} alt='톱니' style={{ rotate: slowerRotate, top, left }} className='difference absolute w-[400px] tablet:w-[600px] desktop:w-[1100px]' />;
}

function RotationWheelRight({ top, right }: { top: number | string; right: number | string }) {
  const { scrollY } = useScroll();
  const slowerRotate = useTransform(scrollY, (value) => value / -10);

  return <motion.img src={ico_wheel} alt='톱니' style={{ rotate: slowerRotate, top, right }} className='difference absolute w-[400px] tablet:w-[600px] desktop:w-[1100px]' />;
}

export { RotationWheelLeft, RotationWheelRight };

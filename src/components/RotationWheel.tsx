import { motion, useScroll, useTransform } from 'framer-motion';

import ico_wheel_big from '/assets/icons/ico_wheel_big.svg';
import ico_wheel_white from '/assets/icons/ico_wheel_white.svg';

function RotationWheelLeft({ top, left, white = false }: { top?: number | string; left?: number | string; white?: boolean }) {
  const { scrollY } = useScroll();
  const slowerRotate = useTransform(scrollY, (value) => value / 10);

  return (
    <motion.img
      src={white ? ico_wheel_white : ico_wheel_big}
      alt='톱니'
      style={{ rotate: slowerRotate, top, left }}
      className={`${white ? '' : 'difference'} absolute w-[400px] tablet:w-[600px] desktop:w-[1100px]`}
    />
  );
}

function RotationWheelRight({ top, right }: { top: number | string; right: number | string }) {
  const { scrollY } = useScroll();
  const slowerRotate = useTransform(scrollY, (value) => value / -10);

  return <motion.img src={ico_wheel_big} alt='톱니' style={{ rotate: slowerRotate, top, right }} className={`difference absolute w-[400px] tablet:w-[600px] desktop:w-[1100px]`} />;
}

export { RotationWheelLeft, RotationWheelRight };

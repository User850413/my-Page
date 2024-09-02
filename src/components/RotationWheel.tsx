import { motion, useScroll, useTransform } from 'framer-motion';

import ico_wheel from '../assets/icons/ico_wheel.svg';

function RotationWheel() {
  const { scrollY } = useScroll();
  const slowerRotate = useTransform(scrollY, (value) => value / 10);

  return <motion.img src={ico_wheel} alt='톱니' style={{ rotate: slowerRotate }} />;
}

export default RotationWheel;

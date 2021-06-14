import * as React from 'react';

import { chakra, Img, HTMLChakraProps } from '@chakra-ui/react';
import { HTMLMotionProps, motion } from 'framer-motion';

type Merge<P, T> = Omit<P, keyof T> & T;

type MotionBoxProps = Merge<HTMLChakraProps<'div'>, HTMLMotionProps<'div'>>;

export const MotionBox: React.FC<MotionBoxProps> = motion(chakra.div);

const HeroAvatarBlob = () => {
  return (
    <React.Fragment>
      <MotionBox
        as="div"
        animate={{
          borderRadius: [
            '64% 36% 32% 68% / 51% 23% 77% 49%',
            '33% 67% 24% 76% / 68% 23% 77% 32%',
            '69% 31% 10% 90% / 81% 51% 49% 19%',
            '89% 11% 62% 38% / 90% 76% 24% 10%',
            '47% 53% 25% 75% / 90% 76% 24% 10%'
          ]
        }}
        transition={{
          duration: 20,
          ease: 'anticipate',
          repeat: Infinity,
          repeatType: 'loop',
          repeatDelay: 0
        }}
        backgroundImage="linear-gradient(45deg, #3023AE 0%, #f09 100%)"
        zIndex={-1}
        top={16}
        right={0}
        position="absolute"
        width="50rem"
        height="50rem"
        // overflow="hidden"
        // clipPath=" inset(10px 20px 30px 40px)"
      >
        {/* <Img
          bottom={0}
          position="absolute"
          right="200px"
          height="100%"
          width="auto"
          src={'/man.png'}
        /> */}
      </MotionBox>
    </React.Fragment>
  );
};

export default React.memo(HeroAvatarBlob);

import React from 'react';
import { Container, AreaKeyframe, Text } from './styles';

const AreaVariants = {
  hidden: {
    x: -20,
    opacity: 0,
  },
  visible: {
    x: [ -50, 40, -35, 25, 0 ],
    opacity: [ 0, 0.5, 0.8, 1],
    transition: {
      type: 'spring',
      mass: 100,
      damping: 200,
      when: 'beforeChildren',
      staggerChildren: 10,
    }
  }
};
const ChildrenVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    rotate: [0, 90, 180, 270, 360],
    opacity: [ 0, 0.5, 0.8, 1],
    transition: {
      type: 'spring',
      mass: 50,
      damping: 120,
    }
  }
};

const Kayframes: React.FC = () => {
  return (
    <Container>
      <AreaKeyframe
        variants={AreaVariants}
        initial="hidden"
        animate="visible"
      >
        <Text
          variants={ChildrenVariants}
          initial="hidden"
          animate="visible"
        >
          Aqui é apenas um teste para keyframes
        </Text>
      </AreaKeyframe>
    </Container>
  );
};

export default Kayframes;

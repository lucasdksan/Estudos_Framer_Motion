import React from 'react';
import { Container, Items } from './styles';

const container = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2,
      when: 'beforeChildren'
    }
  }
};
const item = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  }
};

const NewVariantes: React.FC = () => {
  return (
    <Container
      variants={container}
      initial='hidden'
      animate='visible'
    >
      <Items
        variants={item}
        initial='hidden'
        animate='visible'
      />
      <Items
        variants={item}
        initial='hidden'
        animate='visible'
      />
    </Container>
  );
};

export default NewVariantes;

import React from 'react';
import { Container } from './styles';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {
    x: '-100vw',
    opacity: 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      mass: 100,
      damping: 200,
      when: 'beforeChildren',
      staggerChildren: 10,
    }
  }
};
const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  }
};

const Variants: React.FC = () => {
  return (
    <Container
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        variants={childVariants}
      >
        Variants
      </motion.h1>
    </Container>
  );
};

export default Variants;

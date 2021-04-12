import React from 'react';
import { Container } from './styles';

const HeartVariants = {
  hidden: {
    backgroundColor: "#6a040f"
  },
  hover:{
    scale: 1.1,
    backgroundColor: "#d00000",
    transition: {
      durantion: 0.3,
      yoyo: Infinity,
    }
  }
};

const NewLoop: React.FC = () => {
  return (
    <Container
      variants={HeartVariants}
      initial="hidden"
      whileHover="hover"
    >
      <h1>NewLoop</h1>
    </Container>
  );
};

export default NewLoop;

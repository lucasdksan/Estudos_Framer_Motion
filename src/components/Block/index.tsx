import React from 'react';
import { Container, 
         MainBlock,
         SecondBlock,
         ThirdBlock } from './styles';

const Block: React.FC = () => {
  return (
    <Container>
      <MainBlock
        initial={{ scale: 0 }}
        animate={{ rotate: 90, scale: 1.5 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 80
        }}
      />
      <SecondBlock
        initial={{ x: -100, scale: 0 }}
        animate={{ x: 100, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 100,
        }}
      />
      <ThirdBlock
        initial={{ x: 100, y: -50, scale: 0, rotate: 180 }}
        animate={{ x: -100, y: 50, scale: 1, rotate: 0, rotateY: 180 }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 120,
        }}
      />
    </Container>
  );
};

export default Block;

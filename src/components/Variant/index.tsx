import React from 'react';
import { Container, Items } from './styles';

const Variant: React.FC = () => {
  return (
    <Container
    >
      <Items
        initial={{opacity:0, y:30}}
        animate={{opacity:1, y:0}}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 90,
        }}
      />
      <Items
        initial={{opacity:0, y:30}}
        animate={{opacity:1, y:0}}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 90,
        }}
      />
      <Items
        initial={{opacity:0, y:30}}
        animate={{opacity:1, y:0}}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 90,
        }}
      />
    </Container>
  );
};

export default Variant;

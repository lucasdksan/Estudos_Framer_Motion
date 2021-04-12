import React from 'react';
import { Container, FirstPlus, SecondPlus, ThirdPlus } from './styles';

const Plus: React.FC = () => {
  return (
    <Container>
      <FirstPlus
        whileHover={{ scale: 1.2, rotate: 90 }}
        whileTap={{
          scale: 0.8,
          rotate: -90,
          borderRadius: "100%"
        }}
      />
      <SecondPlus
        animate={{
          scale: [0, 1, 1, 2, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 80
        }}
      />
      <ThirdPlus
        drag
        dragConstraints={{
          top: -20,
          left: -20,
          right: 20,
          bottom: 20,
        }}
      />
    </Container>
  );
};

export default Plus;

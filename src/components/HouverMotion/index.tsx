import React from 'react';
import { Container, Text } from './styles';

const HouverMotion: React.FC = () => {
  return (
    <Container
      whileHover={{
        scale: 1.1,
        textShadow: '0px 0px 8px rgb(255,255,255)',
        boxShadow: '0px 0px 8px rgb(255,255,255)'
      }}
    >
      <Text>Olá, meu nome é Cleiton do Amor!!!</Text>
    </Container>
  );
};

export default HouverMotion;

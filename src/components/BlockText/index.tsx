import React, { useState } from 'react';
import { Container, Text } from './styles';
import { AnimatePresence } from 'framer-motion';

const BlockText: React.FC = () => {
  const [ showTitle, setShowTitle ] = useState(true);
  setTimeout(()=>{
    setShowTitle(false);
  }, 4000);
  return (
    <Container
      initial={{
        x: -1000,
        opacity: 0,
      }}
      animate={{
        x: 0,
        opacity:[0, 0.2, 0.5, 0.8, 1]
      }}
      transition={{
        type: 'spring',
        stiffness: 200
      }}
    >
      <AnimatePresence>
        {
          showTitle && (
            <Text
              exit={{
                y: -1000
              }}
            >
              Olá Meu Nome é Lucas!!
            </Text>
          )
        }
      </AnimatePresence>
    </Container>
  );
};

export default BlockText;

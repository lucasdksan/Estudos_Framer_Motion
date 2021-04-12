import React, { useState } from 'react';
import { Container, 
         TextMotion, 
         ButtonMotion,
         BoxAreaAnimateButton,
         ButtonAnimate,
         Name,
         Area } from './styles';

interface BoxTextProps{
  text: string;
}
interface Motion{
  x: string,
  opacity: string,
}

const BoxText: React.FC<BoxTextProps> = ({text}) => {
  const [ next, setNext ] = useState(false);
  const [ motionMove, setMotionMove ] = useState<Motion>({x: '0', opacity: '1'});
  function handleropen(){
    if(next){
      setMotionMove({x: '-100vw', opacity: '0'});
    } else {
      setMotionMove({x: '0', opacity: '1'});
    }
    setNext(!next);
  }
  return (
    <Container
      animate={{
        opacity: 0.8,
        marginTop: 200,
      }}
    >
      <TextMotion
        animate={{
          fontSize: '50px',
          color: '#b012e2',
          x: 100,
          y: -50,
        }}
      >{text}</TextMotion>
      <ButtonMotion
        initial={{
          x: 0,
          y: -100,
          opacity: 0,
        }}
        animate={{
          x: 10,
          y: 0,
          opacity: 1,
        }}
        transition={{
          delay: 1.5,
          duration: 10,
          type: 'spring',
          stiffness: 150,
        }}
      >
        <h1>Olá</h1>
      </ButtonMotion>
      <BoxAreaAnimateButton>
        <ButtonAnimate  onClick={handleropen}>
          <Name>Next</Name>
        </ButtonAnimate>
      </BoxAreaAnimateButton>
      {
        next&&(
          <Area
            initial={{
              x: '-100vw',
              opacity: 0,
            }}
            animate={{
              x: motionMove.x,
              opacity: motionMove.opacity
            }}
            transition={{
              type: 'spring',
              stiffness: 200
            }}
          >
            <Name>
              Deu certo
            </Name>
          </Area>
        )
      }
    </Container>
  );
};

export default BoxText;

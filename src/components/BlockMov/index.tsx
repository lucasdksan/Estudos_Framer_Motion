import React, { useState } from 'react';
import {  Container, 
          Block, 
          AreaMoveButtons, 
          MoveButtons, 
          DownArrow, 
          UpArrow, 
          LeftArrow, 
          RightArrow,
          ResetButton } from './styles';

const BlockMov: React.FC = () => {
  const [ posX, setPosX ] = useState(0);
  const [ posY, setPosY ] = useState(0);
  const [ scaleObject, setScaleObject ] = useState(1);
  function handlderupMove(){
    setPosY(posY-5);
  }
  function handlerdownMove(){
    setPosY(posY+5);
  }
  function handlerleftMove(){
    setPosX(posX-5);
  }
  function handlerrightMove(){
    setPosX(posX+5);
  }
  function handlerReset(){
    setPosX(0);
    setPosY(0);
    setScaleObject(1);
  }
  return (
    <Container>
      <Block
        initial={{
          x:0,
          y:0,
          scale: 1,
        }}
        animate={{
          x: posX,
          y: posY,
          scale: scaleObject,
        }}
      />
      <AreaMoveButtons>
        <MoveButtons
          onClick={handlerleftMove}
        >
          <LeftArrow/>
        </MoveButtons>
        <MoveButtons
          onClick={handlderupMove}
        >
          <UpArrow/>
        </MoveButtons>
        <MoveButtons
         onClick={handlerdownMove}
        >
          <DownArrow/>
        </MoveButtons>
        <MoveButtons
          onClick={handlerrightMove}
        >
          <RightArrow/>
        </MoveButtons>
        <MoveButtons
          onClick={handlerReset}
        >
          <ResetButton/>
        </MoveButtons>
      </AreaMoveButtons>
      <input 
        type="range" 
        max="2" 
        min="0" 
        step="0.2" 
        value={scaleObject}
        onChange={(e)=>{setScaleObject(Number(e.target.value))}}
      />
    </Container>
  );
};

export default BlockMov;

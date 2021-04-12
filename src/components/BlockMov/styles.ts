import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { BiLeftArrow, BiRightArrow, BiDownArrow, BiUpArrow } from 'react-icons/bi';
import { GrPowerReset } from 'react-icons/gr';

const StylesArrow = css`
    color: #4361ee;
    font-size: 20px;
`;

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 50px;
    margin-top: 50px;
`;
export const Block = styled(motion.div)`
    width: 100px;
    height: 100px;
    background: linear-gradient(100deg, #dec9e9, #6247aa);
    border-radius: 30px;
`;
export const AreaMoveButtons = styled.div`
    width: 100%;
    height: 150px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;
export const MoveButtons = styled.button`
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover{
        cursor: pointer;
    }
`;
export const LeftArrow = styled(BiLeftArrow)`${StylesArrow}`;
export const RightArrow = styled(BiRightArrow)`${StylesArrow}`;
export const DownArrow = styled(BiDownArrow)`${StylesArrow}`;
export const UpArrow = styled(BiUpArrow)`${StylesArrow}`;
export const ResetButton = styled(GrPowerReset)`${StylesArrow}`;
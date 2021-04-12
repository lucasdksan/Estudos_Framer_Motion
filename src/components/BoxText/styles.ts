import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
`;
export const TextMotion = styled(motion.h2)`
    color: #000;
    font-size: 20px;
`;
export const ButtonMotion = styled(motion.button)`
    width: 80px;
    height: 40px;
    background-color: #115588;
`;
export const BoxAreaAnimateButton = styled(motion.div)`
    width: 100%;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
export const ButtonAnimate = styled(motion.button)`
    width: 120px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 5px solid #caf0f8;
    background-color: #0096c7;
`;
export const Name = styled.h3`
    font-size: 20px;
    color: #caf0f8;
    text-align: center;
    font-weight: bold;
    font-style: italic;
`;
export const Area = styled(motion.div)`
    width: 100%;
    height: 100px;
    background-color: #7209b7;
    display: flex;
    align-items: center;
    justify-content: center;
`;
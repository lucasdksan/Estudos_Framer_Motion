import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
`;
export const AreaKeyframe = styled(motion.div)`
    width: 50%;
    height: 150px;
    background: linear-gradient(100deg, #f20089, #6a00f4);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
export const Text = styled(motion.h2)`
    font-size: 25px;
    text-align: center;
    font-weight: boldbold;
    font-family:  'Courier New', Courier, monospace;
    font-style: italic;
`;
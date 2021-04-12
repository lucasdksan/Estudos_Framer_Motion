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
export const Text = styled.h3`
    font-size: 20px;
    text-align: center;
    font-weight: boldbold;
    font-family:  'Courier New', Courier, monospace;
    font-style: italic;
`;
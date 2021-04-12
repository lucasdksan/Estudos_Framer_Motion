import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
    width: 100%;
    height: 500px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 20px 30px;
    margin-top: 100px;
    background: linear-gradient(180deg, #f8f9fa, #343a40);
`;
export const Items = styled(motion.span)`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: linear-gradient(90deg, #ffb600, #ff4800);
    margin-left: 50px;
    margin-right: 50px;
`;

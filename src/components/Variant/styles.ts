import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    flex: 1;
    height: 450px;
    width: 100%;
`;
export const Items = styled(motion.div)`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: linear-gradient(100deg, #f20089, #6a00f4);
`;
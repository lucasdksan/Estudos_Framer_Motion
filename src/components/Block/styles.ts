import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
`;
export const MainBlock = styled(motion.div)`
    background: #000;
    width: 80px;
    height: 80px;
    margin-right: 20px;
    margin-left: 20px;
`;
export const SecondBlock = styled(motion.div)`
    width: 60px;
    height: 60px;
    background: linear-gradient(180deg, #f08, #d0e);
    border-radius: 15px;
    margin-right: 20px;
    margin-left: 20px;
`;
export const ThirdBlock = styled(motion.div)`
    width: 85px;
    height: 85px;
    background: linear-gradient(100deg, #3a0ca3, #b5179e);
    border-radius: 15px;
    margin-right: 20px;
    margin-left: 20px;
`;
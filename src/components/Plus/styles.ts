import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
    width: 100%;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    background: #e5e5e508;
    padding: 10px 20px;
`;
export const FirstPlus = styled(motion.div)`
    height: 100px;
    width: 100px;
    border-radius: 20px;
    background: linear-gradient(200deg, #370617, #9d0208);
`;
export const SecondPlus = styled(motion.div)`
    height: 100px;
    width: 100px;
    border-radius: 20px;
    background: linear-gradient(200deg, #7400b8, #72efdd);
`;
export const ThirdPlus = styled(motion.div)`
    height: 50px;
    width: 50px;
    border-radius: 20px;
    background: linear-gradient(200deg, #7400b8, #72efdd);
`;
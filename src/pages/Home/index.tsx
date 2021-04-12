import React from 'react';
import Block from '../../components/Block';
import Plus from '../../components/Plus';
import Variant from '../../components/Variant/index';
import BlockMov from '../../components/BlockMov/index';
import BoxText from '../../components/BoxText/index';
import Variants from '../../components/Variants/index';
import HoverMotion from '../../components/HouverMotion/index';
import Kayframer from '../../components/Kayframes/index';
import { Container, Title, Content } from './styles';
import NewLoop from '../../components/NewLoop';
import BlockText from '../../components/BlockText/index';
import NewVariantes from '../../components/NewVariantes';
import Path from '../../components/Path';

const Home: React.FC = () => {
  return (
    <Container>
      <Title>Estudo sobre Animações usando Framer-Motion</Title>
      <Content>
        <Block/>
        <Plus/>
        <Variant/>
        <BlockMov/>
        <BoxText
          text="Lucas"
        />
        <HoverMotion/>
        <Variants/>
        <Kayframer/>
        <NewLoop/>
        <NewVariantes/>
        <BlockText/>
        <Path/>
      </Content>
    </Container>
  );
};

export default Home;

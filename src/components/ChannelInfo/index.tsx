import React from "react";

import { Container, HashtagIcon, Title, Separador, Description } from './styles';

const ChannelInfo: React.FC = () => {
  return(
    <Container>
      <HashtagIcon />

      <Title>Chat-livre</Title>

      <Separador />

      <Description>Canal aberto para conversar</Description>
       
    </Container>
  );
}

export default ChannelInfo;
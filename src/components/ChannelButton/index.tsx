import React from "react";

import { Container, HashtagIcon, InviteIcon, SettingsIcon } from './styles';

interface Props {
  channelName: string;
  selected?: boolean;
}

const ChannelButton: React.FC<Props> = ({ 
  channelName,
  selected
 }) => {
  return(
    <Container className={selected ? 'active' : ''}>
      <div>
        <HashtagIcon className="first"/>
        <span>{channelName}</span>
      </div>
      <div className={selected ? 'selected' : ''}>
        <InviteIcon />
        <SettingsIcon />
      </div>
    </Container>
  );
}

export default ChannelButton;
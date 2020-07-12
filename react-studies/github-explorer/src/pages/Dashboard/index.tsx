import React from 'react';
import { Title } from './styles';

import logoImg from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>
        Explore repositórios no GitHub
        <span role="img" aria-label="eye mouth eye">
          👁️👄👁️💅
        </span>
      </Title>
    </>
  );
};

export default Dashboard;

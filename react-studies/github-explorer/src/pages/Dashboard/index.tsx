import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Title, Form, Repositories } from './styles';

import logoImg from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>
        Explore repositórios no GitHub
        <br />
        <span role="img" aria-label="eye mouth eye">
          👁️👄👁️💅
        </span>
      </Title>
      <Form>
        <input type="text" placeholder="Digite aqui" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="https://github.com/osergioneto/estudos">
          <img
            src="https://avatars3.githubusercontent.com/u/17184941?s=460&u=232106eb88002ee3d9dfc94f47de969815573abb&v=4"
            alt="Sérgio Neto"
          />
          <div>
            <strong>osergioneto/estudos</strong>
            <p>Repositório para concentrar os estudos que venho fazendo.</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="https://github.com/osergioneto/estudos">
          <img
            src="https://avatars3.githubusercontent.com/u/17184941?s=460&u=232106eb88002ee3d9dfc94f47de969815573abb&v=4"
            alt="Sérgio Neto"
          />
          <div>
            <strong>osergioneto/estudos</strong>
            <p>Repositório para concentrar os estudos que venho fazendo.</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="https://github.com/osergioneto/estudos">
          <img
            src="https://avatars3.githubusercontent.com/u/17184941?s=460&u=232106eb88002ee3d9dfc94f47de969815573abb&v=4"
            alt="Sérgio Neto"
          />
          <div>
            <strong>osergioneto/estudos</strong>
            <p>Repositório para concentrar os estudos que venho fazendo.</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;

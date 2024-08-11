import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  text-align: center;
  margin: 0; 
  padding: 0;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: white; 
  background-color: blue;
  margin: 0; 
  padding: 20px 0; 
  padding-bottom: 40px;
`;

const Header: React.FC = () => {
    return (
        <HeaderContainer>
            <Title>Lista de Contatos</Title>
        </HeaderContainer>
    );
};

export default Header;
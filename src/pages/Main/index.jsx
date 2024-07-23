import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  width: 100%;
`;
const Container = styled.div``;
const Logo = styled.div``;
const SearchControls = styled.div``;
const Profile = styled.div``;

const index = () => {
  return (
    <Header>
      <Container>
        <Logo></Logo>
        <SearchControls></SearchControls>
        <Profile></Profile>
      </Container>
    </Header>
  );
};

export default index;

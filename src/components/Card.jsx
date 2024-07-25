import styled from 'styled-components';

const Container = styled.div`
  padding: 10px;
  border-radius: 8px;
  border: 1px solid var(--gray-20, #d7dbdd);
  background: #fff;
  width: 160px;
  height: 248px;
  margin-bottom: 12px;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;
const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  width: 160px;
  height: 160px;
  background: var(--gray-20, #d7dbdd);
`;
const Info = styled.div`
  margin-top: 10px;
  padding: 8px;
`;
const Title = styled.p`
  color: var(--primary-dark-color);
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const Address = styled.p`
  color: var(--primary-gray-color);
  text-align: center;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-align: left;
  padding: 4px 0;
`;
const Cost = styled.p`
  color: var(--primary-dark-color);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const Card = ({ info }) => {
  return (
    <Container>
      <ImageContainer>
        <svg className="icon-picture" />
      </ImageContainer>
      <Info>
        <Title>{info.name}</Title>
        <Address>{info.address}</Address>
        <Cost>{info.cost}코인</Cost>
      </Info>
    </Container>
  );
};

export default Card;

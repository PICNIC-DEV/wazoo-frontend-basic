import styled from 'styled-components';

const Container = styled.div`
  padding: 10px;
`;
const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 160px;
  height: 160px;
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
const Address = styled.span`
  color: var(--gray-60, #87929a);
  text-align: center;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const Cost = styled.span``;

const Card = () => {
  return (
    <Container>
      <ImageContainer>
        <svg className="icon-picture" />
      </ImageContainer>
      <Info>
        <Title></Title>
        <Address></Address>
        <Cost></Cost>
      </Info>
    </Container>
  );
};

export default Card;

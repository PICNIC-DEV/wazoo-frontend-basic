import styled from 'styled-components';

const ContainerMain = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TextLabelSignUp = styled.span`
  text-align: center;
  font-family: Pretendard;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 48px;
`;

const ContainerInfo = styled.div`
  width: 526px;
  height: 304px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: coral;
`;

const ContainerRow = styled.div`
  width: 526px;
  height: 64px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 32;
`;

const TextLabelRow = styled.div`
  color: var(--gray-60, #87929a);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const Index = () => {
  return (
    <>
      <ContainerMain>
        <TextLabelSignUp>회원가입</TextLabelSignUp>
        <ContainerInfo>
          <ContainerRow>
            <TextLabelRow>이름</TextLabelRow>
          </ContainerRow>
        </ContainerInfo>
      </ContainerMain>
    </>
  );
};

export default Index;

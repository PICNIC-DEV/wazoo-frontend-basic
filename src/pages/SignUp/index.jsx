import styled from 'styled-components';

const ContainerMain = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TextLabelSignUp = styled.div`
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
  margin-top: 48px;
  margin-bottom: 48px;
`;

const ContainerRow = styled.div`
  width: 526px;
  height: 64px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 32;
  margin-bottom: 16px;
`;

const TextLabelRow = styled.div`
  color: var(--gray-60, #87929a);
  width: 80px;
  height: 24px;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-right: 32px;
`;

const InputRow = styled.div`
  display: flex;
  width: 414px;
  height: 24px;
  padding: 20px 32px;
  align-items: center;
  gap: 10px;

  border-radius: 40px;
  border: 1px solid var(--gray-20, #d7dbdd);
  background: #fff;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

const ButtonNext = styled.button`
  display: flex;
  width: 400px;
  height: 64px;
  padding: 8px 24px 8px 32px;
  justify-content: center;
  align-items: center;
  gap: 48px;
  border-radius: 30px;
  border-color: #27d562;
  background: var(--primary, #27d562);
  margin-top: 48px;

  color: #fff;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
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
            <InputRow>이름을 입력하세요</InputRow>
          </ContainerRow>
          <ContainerRow>
            <TextLabelRow>아이디</TextLabelRow>
            <InputRow>아이디를 입력하세요</InputRow>
          </ContainerRow>
          <ContainerRow>
            <TextLabelRow>비밀번호</TextLabelRow>
            <InputRow>비밀번호를 입력하세요</InputRow>
          </ContainerRow>
          <ContainerRow>
            <TextLabelRow>주소</TextLabelRow>
            <InputRow>주소 검색하기</InputRow>
          </ContainerRow>
          <ContainerRow>
            <TextLabelRow>사용 언어</TextLabelRow>
            <InputRow>언어 선택하기</InputRow>
          </ContainerRow>
        </ContainerInfo>
        <ButtonNext>다음</ButtonNext>
      </ContainerMain>
    </>
  );
};

export default Index;

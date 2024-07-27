import styled from 'styled-components';
import { Navigate, useNavigate } from 'react-router-dom';

const ContainerMain = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextQuizLabel = styled.span`
  width: auto;
  color: var(--gray-100, #374957);
  text-align: center;
  font-family: Pretendard;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 80px;
`;

const ImageQuizResult = styled.div`
  display: flex;
  width: 160px;
  height: 160px;
  padding: 52.889px 52.889px 52.444px 52.444px;
  justify-content: center;
  align-items: center;

  border-radius: 10px;
  background: var(--gray-20, #d7dbdd);
  margin-top: 48px;
`;

const TextResultType = styled.div`
  color: var(--gray-60, #87929a);
  text-align: center;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 32px;
`;

const TextResultInfo = styled.div`
  width: auto;
  height: 63px;
  color: var(--gray-60, #87929a);
  text-align: center;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 12px;
`;

const ButtonLogin = styled.div`
  display: flex;
  width: 400px;
  height: 64px;
  padding: 8px 24px 8px 32px;
  justify-content: center;
  align-items: center;
  gap: 48px;

  border-radius: 30px;
  background: var(--primary, #27d562);

  color: #fff;
  font-family: Pretendard;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 44px;

  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;


const Index = () => {
  const navigate = useNavigate();
  const navigateToLogin = () => {
    console.log("QuizResult -> Login")
    navigate("/Login")
  }

  return (
    <>
      <ContainerMain>
        <TextQuizLabel>당신의 여행 유형은?</TextQuizLabel>
        <ImageQuizResult />
        <TextResultType>입짧은 두더지</TextResultType>
        <TextResultInfo>입짧은 두더지 설명입니다.</TextResultInfo>
        <ButtonLogin onClick={navigateToLogin}>로그인 하기</ButtonLogin>
      </ContainerMain>
    </>
  );
};

export default Index;

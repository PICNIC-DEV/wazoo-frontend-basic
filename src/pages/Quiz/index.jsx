import styled from 'styled-components';

const ContainerMain = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-content: center;
`;

const TextQuestion = styled.div`
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

const ContainerQuiz = styled.div`
  height: 274px;
  display: flex;
  gap: 100px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 52px;
`;

const ContainerPhotoCard = styled.div`
  width: 240px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

const PhotoCard = styled.div`
  display: flex;
  width: 240px;
  height: 240px;
  /* padding: 79.333px 79.333px 78.667px 78.667px; */
  justify-content: center;
  align-items: center;

  border-radius: 10px;
  background: var(--gray-20, #d7dbdd);
  margin-bottom: 10px;
`;

const PhotoInfo = styled.div`
  color: var(--gray-100, #374957);
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const ButtonNext = styled.div`
  display: flex;
  margin: 62px auto;
  width: 400px;
  height: 64px;
  padding: 8px 24px 8px 32px;
  justify-content: center;
  align-items: center;

  border-radius: 30px;
  background: var(--primary, #27d562);
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }

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
        <TextQuestion>Q1. 나는 어쩌구 저쩌구 한다</TextQuestion>
        <ContainerQuiz>
          <ContainerPhotoCard>
            <PhotoCard />
            <PhotoInfo>선택1</PhotoInfo>
          </ContainerPhotoCard>
          <ContainerPhotoCard>
            <PhotoCard />
            <PhotoInfo>선택2</PhotoInfo>
          </ContainerPhotoCard>
        </ContainerQuiz>
        <ButtonNext>다음</ButtonNext>
      </ContainerMain>
    </>
  );
};

export default Index;

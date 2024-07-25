import styled from 'styled-components';

const ContainerProfile = styled.div`
  width: 100%;
  height: 488px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f9f9f9;
`;

const Image = styled.div`
  width: 200px;
  height: 205px;
  margin-bottom: 32px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 200px;
  background: var(--gray-20, #d7dbdd);
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

const TextBoxInfo = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-bottom: 40px;
`;

const TextBoxName = styled.div`
  color: var(--gray-100, #374957);
  text-align: center;
  font-family: Pretendard;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 8px;
`;

const TextBoxNickName = styled.div`
  color: var(--gray-60, #87929a);
  text-align: center;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const TextBoxCoin = styled.div`
  display: inline-flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 32px;
`;

const TextLabelCoin = styled.div`
  color: var(--gray-60, #87929a);
  text-align: center;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-right: 32px;
`;

const TextUsersCoin = styled.div`
  color: var(--gray-100, #374957);
  text-align: center;
  font-family: Pretendard;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const ContainerTemp = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;

const TextLabelTemp = styled.div`
  margin-top: 60px;
  color: var(--gray-100, #374957);
  text-align: center;
  font-family: Pretendard;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const TempIconImage = styled.div`
  width: 275px;
  height: 350px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: grey;
  gap: 24px;
  margin-bottom: 24px;
`;

const TextTempStatus = styled.div`
  height: 24px;
  color: var(--gray-60, #87929a);
  text-align: center;
  font-family: Pretendard;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 12px;
`;

const TextTempStatusInfo = styled.div`
  color: var(--gray-60, #87929a);
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 70px;
`;

const ContainerMyguide = styled.div`
  width: 100%;
  height: 800px;
  /* padding: 60px 280px 60px 320px; */
  padding-top: 5%;
  padding-left: 20%;
  padding-right: 20%;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-content: center;
  background: #f9f9f9;
`;

const ContainerGuideInfo = styled.div`
  position: relative;
  width: 760px;
  height: 375px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  margin-bottom: 32px;
`;

const ContainerInfoLeft = styled.div`
  width: 300px;
  height: 375px;
  margin-right: 50px;
`;

const TextLabelMyguide = styled.span`
  color: var(--gray-100, #374957);
  font-family: Pretendard;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
`;

const TempImageGuide = styled.div`
  background-color: grey;
  width: 300px;
  height: 300px;
  margin-top: 35px;
  margin-right: 48px;
`;

const ContainerInfoRight = styled.div`
  width: 410px;
  height: 375px;
`;

const ContainerGuidDetail = styled.div`
  width: auto;
  height: 54px;
  display: flex;
  flex-direction: column;
  margin-top: 75px;
  margin-bottom: 32px;
`;

const TextGuideName = styled.span`
  color: var(--gray-100, #374957);
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const TextGuideLocation = styled.span`
  color: var(--gray-60, #87929a);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 5px;
`;

const TextGuideIntroduction = styled.span`
  color: var(--gray-100, #374957);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const ContainerGuideHist = styled.div`
  width: auto;
  height: 180px;
  padding: 16px 24px 16px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 8px;
  border: 1px solid var(--gray-20, #d7dbdd);
  background: #fff;

  /* drop-shadow */
  box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.16);
`;

const TextCoin = styled.span`
  color: var(--gray-100, #374957);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 10px;
`;

const TextLabelDate = styled.div`
  height: 48px;
  display: flex;
  padding: 8px 24px 8px 32px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 98px;
  border-radius: 30px;
  border: 1px solid var(--gray-20, #d7dbdd);
  margin-bottom: 10px;
`;

const ContainerChatDateInfo = styled.div`
  width: auto;
  height: 35px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 6px;
  margin-bottom: 6px;

  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

const TextLabelChatDay = styled.span`
  color: var(--gray-100, #374957);
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 3px;
`;

const TextLabelChatDate = styled.span`
  color: var(--gray-60, #87929a);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const ButtonGetChatList = styled.div`
  height: 48px;
  display: flex;
  padding: 8px 24px 8px 32px;
  justify-content: center;
  align-items: center;
  gap: 48px;
  flex-shrink: 0;
  border-radius: 30px;
  background: #27d562;
  color: #fff;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

const Line = styled.div`
  width: 760px;
  height: 1px;
  margin-bottom: 16px;
  background: var(--gray-20, #d7dbdd);
`;

const ContainerReview = styled.div`
  width: 760px;
  height: 250px;
  display: flex;
  flex-direction: column;
`;

const TextLabelReview = styled.span`
  color: var(--gray-100, #374957);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 20px;
`;

const ContainerReviewList = styled.div`
  width: auto;
  height: 205px;
`;

const InnerContainerReviewList = styled.div`
  width: auto;
  height: 137px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

const ContainerReviewCard = styled.div`
  width: 200px;
  height: 87px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  border-radius: 15px;
  margin-left: 10px;
  margin-right: 10px;
  background: #fff;

  /* drop-shadow */
  box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.16);

  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

const TextReviewScript = styled.div`
  color: var(--gray-100, #374957);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const TextReviewAuthor = styled.div`
  overflow: hidden;
  color: var(--gray-60, #87929a);
  text-overflow: ellipsis;
  font-family: Pretendard;
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const Index = () => {
  return (
    <>
      <ContainerProfile>
        <Image>
          <svg className="icon-profile-main" />
        </Image>
        <TextBoxInfo>
          <TextBoxName>Name</TextBoxName>
          <TextBoxNickName>입짧은 두더지</TextBoxNickName>
        </TextBoxInfo>
        <TextBoxCoin>
          <TextLabelCoin>보유코인</TextLabelCoin>
          <TextUsersCoin>2코인</TextUsersCoin>
        </TextBoxCoin>
      </ContainerProfile>
      <ContainerTemp>
        <TextLabelTemp>나의 온도</TextLabelTemp>
        <TempIconImage>images</TempIconImage>
        <TextTempStatus>구름이 가득해요.</TextTempStatus>
        <TextTempStatusInfo>
          이제 막 가이드 활동을 시작했군요! <br />
          열심히 활동하면 곧 해가 뜰 거에요
        </TextTempStatusInfo>
      </ContainerTemp>
      <ContainerMyguide>
        <ContainerGuideInfo>
          <ContainerInfoLeft>
            <TextLabelMyguide>나의 가이드 정보</TextLabelMyguide>
            <TempImageGuide></TempImageGuide>
          </ContainerInfoLeft>
          <ContainerInfoRight>
            <ContainerGuidDetail>
              <TextGuideName>Name</TextGuideName>
              <TextGuideLocation>경기도 남양주시</TextGuideLocation>
              <TextGuideIntroduction>안녕하세요, 포천 20년 토박이 입니다. 포천 가이드 쌉가능</TextGuideIntroduction>
            </ContainerGuidDetail>
            <ContainerGuideHist>
              <TextCoin>1코인</TextCoin>
              <TextLabelDate>
                <ContainerChatDateInfo>
                  <TextLabelChatDay>시작일</TextLabelChatDay>
                  <TextLabelChatDate>2024. 07. 11</TextLabelChatDate>
                </ContainerChatDateInfo>
                <ContainerChatDateInfo>
                  <TextLabelChatDay>종료일</TextLabelChatDay>
                  <TextLabelChatDate>2024. 07. 30</TextLabelChatDate>
                </ContainerChatDateInfo>
              </TextLabelDate>
              <ButtonGetChatList>대화 목록 보기</ButtonGetChatList>
            </ContainerGuideHist>
          </ContainerInfoRight>
        </ContainerGuideInfo>
        <Line></Line>
        <ContainerReview>
          <TextLabelReview>가이드 리뷰</TextLabelReview>
          {/* 리뷰 카드 목록 */}
          <ContainerReviewList>
            <InnerContainerReviewList>
              <ContainerReviewCard>
                <TextReviewScript>어 최고에요 최고에요</TextReviewScript>
                <TextReviewAuthor>입 짧은 두더지</TextReviewAuthor>
              </ContainerReviewCard>
              <ContainerReviewCard>
                <TextReviewScript>어 최고에요 최고에요</TextReviewScript>
                <TextReviewAuthor>입 짧은 두더지</TextReviewAuthor>
              </ContainerReviewCard>
              <ContainerReviewCard>
                <TextReviewScript>어 최고에요 최고에요</TextReviewScript>
                <TextReviewAuthor>입 짧은 두더지</TextReviewAuthor>
              </ContainerReviewCard>
            </InnerContainerReviewList>
            <InnerContainerReviewList>
              <ContainerReviewCard>
                <TextReviewScript>어 최고에요 최고에요</TextReviewScript>
                <TextReviewAuthor>입 짧은 두더지</TextReviewAuthor>
              </ContainerReviewCard>
              <ContainerReviewCard>
                <TextReviewScript>어 최고에요 최고에요</TextReviewScript>
                <TextReviewAuthor>입 짧은 두더지</TextReviewAuthor>
              </ContainerReviewCard>
              <ContainerReviewCard>
                <TextReviewScript>어 최고에요 최고에요</TextReviewScript>
                <TextReviewAuthor>입 짧은 두더지</TextReviewAuthor>
              </ContainerReviewCard>
            </InnerContainerReviewList>
          </ContainerReviewList>
        </ContainerReview>
      </ContainerMyguide>
    </>
  );
};

export default Index;

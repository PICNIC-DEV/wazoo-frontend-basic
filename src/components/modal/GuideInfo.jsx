import styled from 'styled-components';
import { useSelector } from 'react-redux';

const Container = styled.div``;
const Info = styled.div`
  display: flex;
  padding-bottom: 32px;
  border-bottom: 1px solid var(--primary-light-gray);
`;
const Picture = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  width: 300px;
  height: 300px;
  background: var(--gray-20, #d7dbdd);
`;
const InfoContainer = styled.div`
  width: 300px;
  padding: 2px;
  padding-left: 45px;
`;
const Name = styled.span`
  color: var(--primary-dark-color);
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const Temperature = styled.span`
  padding-left: 10px;
`;
const Address = styled.div`
  color: var(--primary-gray-color);
  text-align: center;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-align: left;
  padding: 4px 0 20px 0;
`;
const Intro = styled.div`
  color: var(--primary-dark-color);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const CostContainer = styled.div`
  display: flex;
  width: 255px;
  height: 130px;
  padding: 16px 24px;
  flex-direction: column;
  gap: 10px;
  border-radius: 8px;
  border: 1px solid var(--gray-20, #d7dbdd);
  background: #fff;
  box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.04);
  margin-top: 30px;
`;
const Cost = styled.span`
  color: var(--primary-dark-color);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const DateRange = styled.div`
  display: flex;
  padding: 8px 32px;
  align-items: flex-start;
  gap: 48px;
`;
const Date = styled.div``;
const DateTitle = styled.div`
  color: var(--primary-dark-color);
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const DateTime = styled.div`
  color: var(--gray-60, #87929a);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const ChatStart = styled.button`
  display: flex;
  width: 256px;
  height: 48px;
  padding: 8px 24px 8px 32px;
  justify-content: center;
  align-items: center;
  gap: 48px;
  flex-shrink: 0;
  border-radius: 30px;
  background: #27d562;
  border: 0;
  color: #fff;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
const Review = styled.div``;
const ReviewTitle = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding: 24px 0 16px 0;
`;
const ReviewContainer = styled.div`
  display: flex;
  gap: 10px;
  max-width: 650px;
  overflow-x: auto;
  padding: 3px;
`;
const ReviewBox = styled.div`
  display: flex;
  width: 152px;
  height: 40px;
  padding: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.04);
  cursor: pointer;
`;
const ReviewContent = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--primary-dark-color);
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 400;
`;
const Reviewer = styled.span`
  color: var(--primary-gray-color);
  font-family: Pretendard;
  font-size: 11px;
  font-weight: 500;
`;

const GuideInfo = () => {
  const { item } = useSelector((state) => state.modal);
  const reviews = [
    {
      content: '어 최고에요 어 최고에요 어 최고',
      name: '입짧은 두더지',
    },
    {
      content: '솔직히 좋은가? 흠 난 모르겠는데',
      name: '소비요정 공작',
    },
    {
      content: '완전 강추!',
      name: '완전 강추!',
    },
    {
      content: '솔직히 좋은가? 흠 난 모르겠는데',
      name: '소비요정 공작',
    },
  ];

  return (
    <Container>
      <Info>
        <Picture>
          <svg className="icon-picture-large" />
        </Picture>
        <InfoContainer>
          <Name>{item.name}</Name>
          <Temperature>☁️️</Temperature>
          <Address>{item.address}</Address>
          <Intro>안녕하세요, 포천 20년 토박이 신혜민입니다. 포천 가이드 쌉가능입니다. ^^</Intro>
          <CostContainer>
            <Cost>1코인</Cost>
            <DateRange>
              <Date>
                <DateTitle>시작일</DateTitle>
                <DateTime>2024.07.11</DateTime>
              </Date>
              <Date>
                <DateTitle>종료일</DateTitle>
                <DateTime>2024.07.30</DateTime>
              </Date>
            </DateRange>
            <ChatStart>대화시작하기</ChatStart>
          </CostContainer>
        </InfoContainer>
      </Info>
      <Review>
        <ReviewTitle>가이드 리뷰</ReviewTitle>
        <ReviewContainer>
          {reviews.map((item, index) => (
            <ReviewBox key={'review-' + index}>
              <ReviewContent>{item.content}</ReviewContent>
              <Reviewer>{item.name}</Reviewer>
            </ReviewBox>
          ))}
        </ReviewContainer>
      </Review>
    </Container>
  );
};

export default GuideInfo;

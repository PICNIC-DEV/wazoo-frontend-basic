import { useState } from 'react';
import styled from 'styled-components';
// import Calendar from '../../components/Calendar';

const Container = styled.div`
  width: 100%;
  padding: 10px;
  height: calc(100% - 132px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Info = styled.div`
  padding-bottom: 40px;
  border-bottom: 1px solid var(--primary-light-gray);
`;
const Title = styled.div`
  color: var(--primary-dark-color);
  text-align: center;
  font-family: Pretendard;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const ApplyContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 2px;
  margin-top: 48px;
`;
const Form = styled.div`
  display: flex;
  align-items: center;
`;
const SubTitle = styled.span`
  color: var(--primary-gray-color);
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  width: 80px;
`;
const Input = styled.input`
  margin-left: 32px;
  padding: 20px 32px;
  border-radius: 40px;
  border: 1px solid var(--primary-light-gray);
  background: #fff;
  width: 350px;
  height: 24px;
`;
const DateRange = styled.div`
  display: flex;
  position: relative;
  border: 1px solid var(--primary-light-gray);
  margin-left: 32px;
  padding: 20px 32px;
  border-radius: 40px;
  background: #fff;
  width: 350px;
  height: 24px;
  align-items: center;
  gap: 108px;
`;
const DateController = styled.div`
  border-radius: 30px;
  padding: 15px 0;
  box-sizing: border-box;
  position: relative;
`;
const DateTitle = styled.span`
  color: var(--primary-dark-color);
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const Date = styled.div`
  cursor: pointer;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  white-space: nowrap;
  color: var(--primary-gray-color);
`;
const UploadGuide = styled.div`
  color: var(--primary-gray-color);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding: 20px 0 15px 0;
`;
const Upload = styled.div`
  display: flex;
  width: 528px;
  padding: 34px 0;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1px dashed var(--gray-60, #87929a);
  background: var(--gray-20, #d7dbdd);
  margin-bottom: 75px;
  flex-direction: column;
`;
const NextBtn = styled.button`
  display: flex;
  width: 401px;
  height: 64px;
  padding: 8px 24px;
  justify-content: center;
  align-items: center;
  gap: 48px;
  flex-shrink: 0;
  border-radius: 30px;
  border: 0;
  background: var(--primary-color);
  color: #fff;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const Text = styled.span`
  color: var(--primary-gray-color);
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 16px;
`;

const Index = () => {
  const [applyForm, setApplyForm] = useState({
    intro: '',
    address: '',
    cost: '',
    dateRange: {
      startDate: '시작일 입력하기',
      endDate: '종료일 입력하기',
    },
  });

  return (
    <Container>
      <Info>
        <Title>가이드 등록하기</Title>
        <ApplyContainer>
          <Form>
            <SubTitle>한줄 소개</SubTitle>
            <Input
              placeholder="한 줄 소개를 입력하세요."
              value={applyForm.intro}
              onChange={(event) => {
                setApplyForm({ ...applyForm, intro: event.target.value });
              }}
            />
          </Form>
          <Form>
            <SubTitle>지역</SubTitle>
            <Input
              placeholder="지역 검색하기"
              value={applyForm.address}
              onChange={(event) => {
                setApplyForm({ ...applyForm, address: event.target.value });
              }}
            />
          </Form>
          <Form>
            <SubTitle>필요 코인</SubTitle>
            <Input
              placeholder="필요 코인 입력하기"
              value={applyForm.cost}
              onChange={(event) => {
                setApplyForm({ ...applyForm, cost: event.target.value });
              }}
            />
          </Form>
          <Form>
            <SubTitle>가능 일자</SubTitle>
            <DateRange>
              <DateController>
                <DateTitle>시작일</DateTitle>
                <Date>{applyForm.dateRange.startDate}</Date>
              </DateController>
              <DateController>
                <DateTitle>종료일</DateTitle>
                <Date>{applyForm.dateRange.endDate}</Date>
              </DateController>
              {/* <Calendar isDateOpen={isDateOpen}/> */}
            </DateRange>
          </Form>
        </ApplyContainer>
      </Info>
      <UploadGuide>사진 업로드하기</UploadGuide>
      <Upload>
        <svg className="icon-picture-medium" />
        <Text>파일 선택하기</Text>
      </Upload>
      <NextBtn>다음</NextBtn>
    </Container>
  );
};

export default Index;

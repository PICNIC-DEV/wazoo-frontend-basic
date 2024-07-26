import { useState, useEffect, useRef } from 'react';
import { format } from 'date-fns';
import styled from 'styled-components';
import Calendar from '../../components/Calendar';

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
const DateTime = styled.div`
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
  cursor: pointer;
  position: relative;
`;
const FileInput = styled.input`
  display: block;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0;
  cursor: pointer;
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
  const CalenderRef = useRef(null);
  const [applyForm, setApplyForm] = useState({
    intro: '',
    address: '',
    cost: '',
    dateRange: {
      startDate: '시작일 입력하기',
      endDate: '종료일 입력하기',
    },
  });
  const [dateRange, setDateRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  });
  const [isDateOpen, setIsDateOpen] = useState(false);
  const [files, setFiles] = useState([]);

  const handleDateRange = (ranges) => {
    setDateRange({ ...dateRange, startDate: ranges.selection.startDate, endDate: ranges.selection.endDate });
    setApplyForm({
      ...applyForm,
      dateRange: {
        ...applyForm.dateRange,
        startDate: format(ranges.selection.startDate, 'MM-dd'),
        endDate: format(ranges.selection.endDate, 'MM-dd'),
      },
    });
  };

  const handleDate = () => {
    setIsDateOpen(true);
  };

  const handleClickOutside = (event) => {
    if (CalenderRef.current && !CalenderRef.current.contains(event.target)) {
      setIsDateOpen(false);
    }
  };

  const handleFilesChange = (e) => {
    setFiles(Array.from(e.target.files));
}

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

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
          <Form ref={CalenderRef}>
            <SubTitle>가능 일자</SubTitle>
            <DateRange onClick={handleDate}>
              <DateController>
                <DateTitle>시작일</DateTitle>
                <DateTime>{applyForm.dateRange.startDate}</DateTime>
              </DateController>
              <DateController>
                <DateTitle>종료일</DateTitle>
                <DateTime>{applyForm.dateRange.endDate}</DateTime>
              </DateController>
              <Calendar dateRange={dateRange} onChange={handleDateRange} isDateOpen={isDateOpen} />
            </DateRange>
          </Form>
        </ApplyContainer>
      </Info>
      <UploadGuide>사진 업로드하기</UploadGuide>
      <form>
        <Upload>
          <FileInput type="file" onChange={handleFilesChange} />
          <svg className="icon-picture-medium" />
          <Text>파일 선택하기</Text>
        </Upload>
      </form>
      <NextBtn>다음</NextBtn>
    </Container>
  );
};

export default Index;

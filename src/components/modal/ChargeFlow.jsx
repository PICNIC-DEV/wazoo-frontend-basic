import { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { hideModal } from '../redux/slice';

const Container = styled.div`
  padding: 40px 30px;
`;
const Title = styled.div`
  color: var(--primary-dark-color);
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  border-bottom: 1px solid var(--primary-light-gray);
`;
const InfoContainer = styled.div`
  padding: 35px 20px;
`;
const Content = styled.div`
  color: var(--primary-dark-color);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const BtnContainer = styled.div``;
const CancelBtn = styled.button`
  border-radius: 30px;
  background: var(--primary-light-gray);
  color: var(--primary-gray-color);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const ConfirmBtn = styled.button`
  border-radius: 30px;
  background: var(--brand-color);
  color: #fff;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const ChargeFlow = () => {
  const [step, setStep] = useState(1);
  const dispatch = useDispatch();

  const handleStep = (target) => {
    setStep(target);
  };

  const closeModal = () => {
    dispatch(hideModal());
  };

  return (
    <>
      {isReport && (
        <Container>
          <Title>신고하기</Title>
          <InfoContainer>
            <Content></Content>
            <BtnContainer>
              <CancelBtn onClick={closeModal}></CancelBtn>
              <ConfirmBtn></ConfirmBtn>
            </BtnContainer>
          </InfoContainer>
        </Container>
      )}
    </>
  );
};

export default ChargeFlow;

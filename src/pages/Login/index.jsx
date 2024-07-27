import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { Instance } from '../../apis/axiosConfig';
import styled from 'styled-components';

const ContainerMain = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f9f9f9;
`;

const ContainerLogoBox = styled.div`
  width: 366px;
  height: 115px;
  padding: 10px;
  gap: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  margin-bottom: 48px;
  `;

const ContainerLogoImage = styled.div`
  display: flex;
  width: 320px;
  height: 62px;
  justify-content: center;
  align-items: center;
  /* background-color: #87929a; */
`;

const ContainerLogoTitle = styled.div`
  color: var(--gray-60, #87929a);
  text-align: center;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const InputRow = styled.input`
  display: flex;
  width: 414px;
  height: 24px;
  padding: 20px 32px;
  align-items: center;
  margin-bottom: 10px;

  border-radius: 40px;
  border: 1px solid var(--gray-20, #d7dbdd);
  background: #fff;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

const ContainerButtons = styled.div`
  width: 414px;
  height: 64px;
  gap: 16px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  margin-top: 36px;
`;

const ButtonStyleLogin = styled.div`
  display: flex;
  width: 199px;
  height: 64px;
  padding: 8px 24px 8px 32px;
  justify-content: center;
  align-items: center;
  gap: 48px;
  border-radius: 30px;
  border-color: #27d562;
  background: var(--primary, #27d562);
  color: #fff;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  border: 0;
  cursor: pointer;
`;

const ButtonStyleSignUp = styled.div`
  display: flex;
  width: 199px;
  height: 64px;
  padding: 8px 24px 8px 32px;
  justify-content: center;
  align-items: center;
  gap: 48px;
  border-radius: 30px;
  background: var(--gray-100, #374957);
  color: #fff;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  border: 0;
  cursor: pointer;
`;

const Index = () => {
  const [id, setId] = useState(false);
  const [pw, setPw] = useState(false);

  const handleChangeId = (event) => {
    console.log(event.target.value);
    setId(event.target.value);
  };

  const handleChangePw = (event) => {
    console.log(event.target.value);
    setPw(event.target.value);
  };

  const navigate = useNavigate();
  const navigateToSignup = () => {
    console.log('login -> signup');
    navigate('/signup');
  };

  const submitForm = () => {
    const { data } = Instance.get('');
    console.log(data);
    console.log('================');
    console.log(`id : ${id}`);
    console.log(`pw : ${pw}`);
  };

  return (
    <>
      <ContainerMain>
        <ContainerLogoBox>
          <ContainerLogoImage>
            <svg className="icon-logo-large" />
          </ContainerLogoImage>
          <ContainerLogoTitle>토박이 가이드 매칭 서비스</ContainerLogoTitle>
        </ContainerLogoBox>
        <InputRow placeholder="아이디를 입력하세요" onChange={handleChangeId} maxlength="10" />
        <InputRow placeholder="비밀번호를 입력하세요" onChange={handleChangePw} maxlength="10" />
        <ContainerButtons>
          <ButtonStyleLogin onClick={submitForm}>로그인</ButtonStyleLogin>
          <ButtonStyleSignUp onClick={navigateToSignup}>회원가입</ButtonStyleSignUp>
        </ContainerButtons>
      </ContainerMain>
    </>
  );
};

export default Index;

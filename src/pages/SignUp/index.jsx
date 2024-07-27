import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setInfo } from '../../redux/userSlice';

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

const Index = () => {
  const [signupForm, setSignupForm] = useState({
    name: '',
    login_id: '',
    login_password: '',
    address: '',
    nativeLanguage: '',
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleUserId = () => {
    dispatch(setInfo({ userId: signupForm.login_id }));
  };

  // const handleSignupForm = () => {
  //   let formData = new FormData(JSON.stringify(signupForm));
  //   try {
  //     const { data } = Instance.post('/api/user/register', formData);
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const handleSignupForm = () => {
    let formData = new FormData();
    formData.append('name', signupForm.name);
    formData.append('login_id', signupForm.login_id);
    formData.append('login_password', signupForm.login_password);
    formData.append('address', signupForm.address);
    formData.append('nativeLanguage', signupForm.nativeLanguage);
    axios
      .post('/api/api/user/register', formData)
      .then((response) => {
        console.log(response.data);
        handleUserId();
        navigate('/quiz');
      })
      .catch((error) => {
        console.error('There was an error!', error);
      });
  };

  return (
    <>
      <ContainerMain>
        <TextLabelSignUp>회원가입</TextLabelSignUp>
        <ContainerInfo>
          <ContainerRow>
            <TextLabelRow>{'이름'}</TextLabelRow>
            <InputRow
              placeholder={'이름을 입력해주세요'}
              value={signupForm.name}
              onChange={(event) => {
                setSignupForm({ ...signupForm, name: event.target.value });
              }}
            />
          </ContainerRow>
          <ContainerRow>
            <TextLabelRow>{'아이디'}</TextLabelRow>
            <InputRow
              placeholder={'아이디를 입력해주세요'}
              value={signupForm.login_id}
              maxLength={15}
              onChange={(event) => {
                setSignupForm({ ...signupForm, login_id: event.target.value });
              }}
            />
          </ContainerRow>
          <ContainerRow>
            <TextLabelRow>{'비밀번호'}</TextLabelRow>
            <InputRow
              placeholder={'비밀번호를 입력해주세요'}
              value={signupForm.login_password}
              maxLength={15}
              onChange={(event) => {
                setSignupForm({ ...signupForm, login_password: event.target.value });
              }}
            />
          </ContainerRow>
          <ContainerRow>
            <TextLabelRow>{'주소'}</TextLabelRow>
            <InputRow
              placeholder={'주소를 입력해주세요'}
              value={signupForm.address}
              onChange={(event) => {
                setSignupForm({ ...signupForm, address: event.target.value });
              }}
            />
          </ContainerRow>
          <ContainerRow>
            <TextLabelRow>{'사용 언어'}</TextLabelRow>
            <InputRow
              placeholder={'사용 언어를 입력해주세요'}
              value={signupForm.nativeLanguage}
              onChange={(event) => {
                setSignupForm({ ...signupForm, nativeLanguage: event.target.value });
              }}
            />
          </ContainerRow>
        </ContainerInfo>
        <ButtonNext onClick={handleSignupForm}>다음</ButtonNext>
      </ContainerMain>
    </>
  );
};
export default Index;

import styled from 'styled-components';
import { Navigate, useNavigate } from 'react-router-dom';
import InputDataForm from '../Login/InputDataForm';

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



const Index = () => {
  const InputDatas =[
    {
      label: "이름",
      placeholder: "이름을 입력해주세요",
      required: true
    },
    {
      label: "아이디",
      placeholder: "아이디를 입력해주세요",
      required: true
    },
    {
      label: "비밀번호",
      placeholder: "비밀번호를 입력해주세요",
      required: true
    },
    {
      label: "주소",
      placeholder: "주소를 입력해주세요",
      required: true
    },
    {
      label: "사용 언어",
      placeholder: "사용 언어를 입력해주세요",
      required: true
    }
  ]

  const LanguageList = [

  ];

  const navigate = useNavigate();
  const navigateToQuiz = () => {
    console.log("signup -> quiz")
    navigate("/quiz")
  }

  return (
    <>
      <ContainerMain>
        <TextLabelSignUp>회원가입</TextLabelSignUp>
        <ContainerInfo>
          {InputDatas.map((item) => (
            <InputDataForm label={item.label} placeholder={item.placeholder} required={item.required} />
          ))}
        </ContainerInfo>
        <ButtonNext onClick={navigateToQuiz}>다음</ButtonNext>
      </ContainerMain>
    </>
  );
};
export default Index;
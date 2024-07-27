import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import QuizPhotoCard from './QuizPhotoCard';
import QuizForm from './QuizForm';

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
  gap: 20px;
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
  /* background-image: url("../../assets/icons/minus_icon.svg"); */
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
  /* background: var(--primary, #27d562); */
  background-color: #27d562;
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
  const [choiceA, setChoiceA] = useState(false);
  const [choiceB, setChoiceB] = useState(false);
  const [question, setQuestion] = useState('Q1. 길거리 유혹은 못참지! vs 목적지를 향해 직진!');
  const [quizNum, setQuizNum] = useState(1);
  const [message1, setMessage1] = useState("유동적");
  const [message2, setMessage2] = useState("계획적");
  const [imgSrc1, setImgSrc1] = useState(null);
  const [imgSrc2, setImgSrc2] = useState(null);
  
  const submitFormA = () => {
    setChoiceA(true)
    setChoiceB(false)
  
  const submitFormA = (event) => {
    setChoice(`${choice} + "/" +${message1}`)
    console.log("--------------")
    console.log(`ㅇㅇ${choice}`)
    NextQuiz()
  }

  const submitFormB = (event) => {
    setChoice(`${choice} + "/" +${message2}`)
    console.log("--------------")
    console.log(`choice ==> ${choice}`)
    NextQuiz()
  }

  const quizList = [
    {
      question: "Q1. 길거리 유혹은 못참지! <\n>vs 목적지를 향해 직진!",
      message1: "유동적",
      message2: "계획적",
      imageSrc1: null,
      imageSrc2: null
    },
    {
      question: "Q2. 여행은 힐링이지~ 10시 기상~ \nvs 내 연차는 소중하다! 1분1초 알뜰히! ",
      message1: "유동적",
      message2: "계획적",
      imageSrc1: null,
      imageSrc2: null
    },
    {
      question: "Q3.여행짐은 간단하게, 필요한건 지갑뿐! \nvs 나는야 21세기 보부상 ",
      message1: "유동적 + 플렉스",
      message2: "계획적 + 가성비",
      imageSrc1: null,
      imageSrc2: null
    },
    {
      question: "Q4. 여기서부터 저기까지 다주세요😎 \nvs 여행지 물가는 비싸구나.. 다른거먹자!",
      message1: "플렉스",
      message2: "가성비",
      imageSrc1: null,
      imageSrc2: null
    },
    {
      question: "Q5. 숙소도 여행의 일부, 화려하게 사진 한장! \nvs 숙소는 잠만 자는 곳!",
      message1: "플렉스",
      message2: "가성비",
      imageSrc1: null,
      imageSrc2: null
    },
    {
      question: "Q6. 미리 찾아본 추천맛집 \nvs 토박이들만 아는 현지맛집",
      message1: "유명관광지",
      message2: "현지인 체험",
      imageSrc1: null,
      imageSrc2: null
    },
    {
      question: "Q7. 인생은 마이웨이 혼자 다닐래 \nvs 사람들이랑 부대끼며 추억만들래 ",
      message1: "혼자",
      message2: "다같이",
      imageSrc1: null,
      imageSrc2: null
    }
  ]
  // let quizNum = 0;
  const SetQuiz = () => {
    setQuestion(quizList[quizNum].question)
    setMessage1(quizList[quizNum].message1)
    setMessage2(quizList[quizNum].message2)
    setImgSrc1(quizList[quizNum].imageSrc1)
    setImgSrc2(quizList[quizNum].imageSrc2)
  }

  const NextQuiz = () => {
    if (quizNum < quizList.length) {
      setQuizNum(quizNum + 1)
      SetQuiz()
    }
  }

  const navigate = useNavigate();
  const navigateToQuizResult = () => {
    console.log("Quiz -> QuizResult")
    navigate("/QuizResult")
  }

  const QuizFinish = () => {
    if (quizNum < quizList.length) {
      alert("아직 설문이 끝나지 않았습니다")
    }
    else {
      navigateToQuizResult()
    }
  }
  // const { data } = Instance.post('/api/user/quizresult', loginData)
  // .then(function(response){
  //   //response
  // }).catch(function(error) {
  //   //error
  // }).then(function() {
  //   //항상 실행 
  // });

  // // 로그인 성공 
  // if(data.message){
  //   const navigate = useNavigate();
  //   navigate("/")  
  // }
  return (
    <>
      <ContainerMain>
        <TextQuestion>{question}</TextQuestion>
        <ContainerQuiz>
          <QuizPhotoCard link={imgSrc1} message={message1} onClick={NextQuiz} />
          <QuizPhotoCard link={imgSrc2} message={message2} onClick={NextQuiz} />
        </ContainerQuiz>
        <ButtonNext onClick={QuizFinish}>결과 보기</ButtonNext>
      </ContainerMain>
    </>
  );
};

export default Index;

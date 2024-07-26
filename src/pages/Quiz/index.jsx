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
  const [question, setQuestion] = useState('Q1. question');
  const [quizNum, setQuizNum] = useState(1);
  const [message1, setMessage1] = useState("text 1");
  const [message2, setMessage2] = useState("text 2");
  const [imgSrc1, setImgSrc1] = useState(null);
  const [imgSrc2, setImgSrc2] = useState(null);
  // const [quizNum, setQuizNum] = useState('');
  

  const submitFormA = () => {
    setChoiceA(true)
    setChoiceB(false)
    console.log("--------------")
    console.log(`choiceA ==> ${choiceA}`)
    console.log(`choiceB ==> ${choiceB}`)
  }

  const submitFormB = () => {
    setChoiceA(false)
    setChoiceB(true)
    console.log("--------------")
    console.log(`choiceA ==> ${choiceA}`)
    console.log(`choiceB ==> ${choiceB}`)
  }

  const quizList = [
    {
      question: "Q1. question",
      message1: "text 1",
      message2: "text 2",
      imageSrc1: null,
      imageSrc2: null
    },
    {
      question: "Q2. question",
      message1: "text 1",
      message2: "text 2",
      imageSrc1: null,
      imageSrc2: null
    },
    {
      question: "Q3. question",
      message1: "text 1",
      message2: "text 2",
      imageSrc1: null,
      imageSrc2: null
    },
    {
      question: "Q4. question",
      message1: "text 1",
      message2: "text 2",
      imageSrc1: null,
      imageSrc2: null
    }
  ];
  
  // let quizNum = 0;
  const SetQuiz = () => {
    setQuestion(quizList[quizNum].question)
    setMessage1(quizList[quizNum].message1)
    setMessage2(quizList[quizNum].message2)
    setImgSrc1(quizList[quizNum].imgSrc1)
    setImgSrc2(quizList[quizNum].imgSrc2)
  }

  const NextQuiz = () => {
    if(quizNum < quizList.length){
      setQuizNum(quizNum+1)
      SetQuiz()
      console.log(quizNum)
    }
  }

  const navigate = useNavigate();
  const navigateToQuizResult = () => {
    console.log("Quiz -> QuizResult")
    navigate("/QuizResult")
  }

  const QuizFinish = () => {
    if(quizNum < quizList.length){
      alert("아직 설문이 끝나지 않았습니다")
    }
    else{
      navigateToQuizResult()
    }
  }

  return (
    <>
      <ContainerMain>
        <TextQuestion>{question}</TextQuestion>
        <ContainerQuiz>
          <QuizPhotoCard link={imgSrc1} message={message1} onClick={NextQuiz} />
          <QuizPhotoCard link={imgSrc2} message={message2} onClick={NextQuiz}/>
        </ContainerQuiz>
        <ButtonNext onClick={QuizFinish}>결과 보기</ButtonNext>
      </ContainerMain>
    </>
  );
};

export default Index;

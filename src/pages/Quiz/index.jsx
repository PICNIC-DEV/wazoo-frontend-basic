import { useState } from 'react';
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
  background: var(--primary, #27d562);
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

  return (
    <>
      <ContainerMain>
        {quizList.map((item) => {
          <QuizForm question={item.question} />
        })}
        <QuizForm question={"Q1. question"}/>
        <ButtonNext>다음</ButtonNext>
      </ContainerMain>
    </>
  );
};

export default Index;

import styled from "styled-components";
import QuizPhotoCard from "./QuizPhotoCard";

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

const QuizForm = (props) => {
  return(
    <>
      <TextQuestion>{props.question}</TextQuestion>
      <ContainerQuiz>
        <QuizPhotoCard link={props.imageSrc1} message={props.message1}/>
        <QuizPhotoCard link={props.imageSrc2} message={props.message2}/>
      </ContainerQuiz>
    </>
  );
}

export default QuizForm;
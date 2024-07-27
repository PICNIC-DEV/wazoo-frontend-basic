import styled from "styled-components";

const ContainerPhotoCard = styled.div`
  width: 400px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

// -- 0727 -- 카드 + 이미지
const PhotoCard = styled.div`
  display: flex;
  width: 240px;
  height: 240px;
  /* padding: 79.333px 79.333px 78.667px 78.667px; */
  justify-content: center;
  align-items: center;

  border-radius: 10px;
  background: var(--gray-20, #d7dbdd);
  background-image: URL;
  margin-bottom: 10px;

  color: var(--gray-100, white);
  text-align: center;
  font-family: Pretendard;
  font-size: 35px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

// const PhotoInfo = styled.div`
//   color: var(--gray-100, #374957);
//   text-align: center;
//   font-family: Pretendard;
//   font-size: 20px;
//   font-style: normal;
//   font-weight: 500;
//   line-height: normal;
// `;

const QuizPhotoCard = (props) => {
 return(
  <ContainerPhotoCard onClick={props.onClick || null}>
    <PhotoCard background={props.bColor} link={props.url || null}>{props.message}</PhotoCard>
    {/* <PhotoInfo>{props.message || null}</PhotoInfo> */}
  </ContainerPhotoCard>
 );   
}

export default QuizPhotoCard;
import styled from 'styled-components';

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

const InputDataForm = (props) => {
  return (
    <>
      <ContainerRow>
        <TextLabelRow>{props.label}</TextLabelRow>
        <InputRow placeholder={props.placeholder} required={props.required || false} />
      </ContainerRow>
    </>
  );
};

export default InputDataForm;

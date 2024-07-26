import { useState, useRef } from 'react';
import styled from 'styled-components';
import plusIcon from '../assets/icons/plus_icon_gray.svg';
import Record from './AudioRecButton';

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  align-items: center;
  gap: 20px;
  justify-content: space-between;
`;

const InputStyle = {
  width: '100%',
  padding: '20px 32px',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '40px',
  border: '1px solid var(--gray-20, #D7DBDD)',
  background: ' #FFF',
  fontColor: 'var(--gray-60, #87929A)',
  fontSize: '14px',
  fontStyle: 'normal',
  fontWeight: '500',
};

const PlusIconContainer = styled.div``;
const AudioRecButtonContainer = styled.div``;

const SendButtonContainer = styled.div`
  display: flex;
  width: 140px;
  height: 48px;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 48px;
  border-radius: 30px;
  background: var(--primary, #27d562);
  box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.16) #ffffff;

  /* text-style */
  color: #fff;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

// 채팅 입력 시 ...
const Input = (props) => {
  const [message, setMessage] = useState('');
  const inputRef = useRef(null);

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendButtonClick = () => {
    props.sendMessage(message);
    console.log(message);
    setMessage('');
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSendButtonClick();
    }
  };

  return (
    <InputContainer>
      <PlusIconContainer>
        <img src={plusIcon} alt="Plus Icon" />
      </PlusIconContainer>
      <input ref={inputRef} style={InputStyle} placeholder="메시지를 입력하세요" value={message} onChange={handleInputChange} onKeyDown={handleKeyPress} />
      <AudioRecButtonContainer>
        <Record></Record>
      </AudioRecButtonContainer>
      <SendButtonContainer onClick={handleSendButtonClick}>보내기</SendButtonContainer>
    </InputContainer>
  );
};

export default Input;

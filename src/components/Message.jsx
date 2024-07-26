import styled from 'styled-components';

const MessageContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  align-items: end;
  margin: 20px 0;
`;

const pubMessageStyle = {
  justifyContent: 'start',
};

const subMessageStyle = {
  justifyContent: 'end',
  flexDirection: 'row-reverse',
};

const MessageBallon = styled.div`  
display: flex;
padding: 24px;
flex-direction: column;
justify-content: center;
align-items: flex-start;
gap: 10px;  
border-radius: 20px;
  padding: 24px;
  background-color white; 
  box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.16);
#FFFFFF

icon-translate
Component instance

`;

const DayTime = styled.div`
  color: var(--gray-60, #87929a);
  font-size: 12px;
  font-weight: 400;
  margin: 0 20px;
  white-space: nowrap;
`;

// timestamp 포맷
export const formatDate = (timestamp) => {
  const date = new Date(timestamp);
  const today = new Date();

  today.setHours(0, 0, 0, 0);
  date.setHours(0, 0, 0, 0);

  if (date.getTime() === today.getTime()) {
    // 채팅 날짜가 오늘인 경우 시간만 표시
    return new Date(timestamp.toLocaleTimeString());
  } else {
    // 채팅 날짜가 오늘 이전인 경우 날짜만 표시
    return date.toLocaleDateString();
  }
};

const Message = (props) => {
  const message = props.item.message;
  const dateTime = formatDate(props.item.create_at);
  const isPubMessage = props.item.type == 'pub' ? true : false;

  return (
    <MessageContainer style={isPubMessage ? pubMessageStyle : subMessageStyle}>
      <MessageBallon>{message}</MessageBallon>
      <DayTime>{dateTime}</DayTime>
    </MessageContainer>
  );
};

export default Message;

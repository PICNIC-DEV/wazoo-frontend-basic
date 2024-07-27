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
  justify-content: space-between;
  align-items: flex-start;
  gap: 4px;
  border-radius: 20px;
  padding: 24px;
  color: var(--gray-100, #374957);
  box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.08);
`;

const OriginText = styled.div`
  color: var(--gray-100, #374957);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const TranslatedText = styled.div`
  color: var(--gray-60, #87929a);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
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
  const translatedMessage = props.item.translateMessage;
  const dateTime = formatDate(props.item.createdAt);
  console.log(props.item);

  const isPubMessage = props.item.userId != props.userId ? true : false;
  console.log('debug : ', props.item.userId, props.userId);
  return (
    <MessageContainer style={isPubMessage ? pubMessageStyle : subMessageStyle}>
      <MessageBallon>
        <OriginText>{message}</OriginText>
        <TranslatedText>{translatedMessage}</TranslatedText>
      </MessageBallon>
      <DayTime>{dateTime}</DayTime>
    </MessageContainer>
  );
};

export default Message;

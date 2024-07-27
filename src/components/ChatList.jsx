import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';

const Item = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  position: relative;
  padding: 18px 0;
  align-items: center;
  justify-content: space-between;
  border: 1px;

  &::after {
    position: absolute;
    content: '';
    width: 100%;
    background-color: var(--border-color);
    height: 1px;
    bottom: 0;
  }
`;

const LeftContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  position: relative;
  align-items: center;
  margin-left: 24px;
`;

const Profile = styled.div``;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding-left: 24px;
  gap: 4px;
`;

const Name = styled.div`
  color: var(--gray-100, #374957);
  font-size: 18px;
  font-weight: 500;
`;

const LastChat = styled.div`
  color: var(--gray-60, #87929a);
  font-size: 14px;
  font-weight: 400;
`;

const DayTime = styled.div`
  color: var(--gray-60, #87929a);
  font-size: 14px;
  font-weight: 400;
  margin-right: 24px;
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

const ChatList = (props) => {
  const item = props.item;
  console.log(props.item);
  const navigate = useNavigate();

  // ChatList 클릭 시 해당 채팅방 입장
  const handleChatClick = (item) => {
    navigate(`/chat/${item.chatId}/${item.userId}/${item.partnerId}`);
  };

  return (
    <>
      <Item
        onClick={() => {
          console.log(item.chatId);
          handleChatClick(item);
        }}
      >
        <LeftContainer>
          <Profile>
            <div className="icon profile">
              <svg className="icon-profile" />
            </div>
          </Profile>
          <TextContainer>
            <Name>{item.partnerName}</Name>
            <LastChat>{item.message}</LastChat>
          </TextContainer>
        </LeftContainer>
        <DayTime>{formatDate(item.createAt)}</DayTime>
      </Item>
    </>
  );
};

export default ChatList;

import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import Message from '../../components/Message';

const ChatPage = styled.div`
  padding-top: 32px;
  width: 100%;
`;

const Notification = styled.span`
  color: var(--gray-100, #374957);
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
`;

const ScreenSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-contents: space-between;
  margin-top: 20px;
`;

const MessageSection = styled.div`
  width: 100%;
  height: 100%;
`;

const InputSection = styled.div`
  width: 100%;
  height: 80px;
  position: absolute;
  top: 100%;
  border: 3px solid gray;
`;

const dummyData = [
  {
    message: '깊은 산 속 옹달샘 누가 먹고 갔나요',
    create_at: 1626876000000,
    type: 'pub',
  },
  {
    message: '맑고 맑은 옹달샘 누가 먹고 갔나요',
    create_at: 1626876000000,
    type: 'sub',
  },
];

const Chat = () => {
  const { partnerName } = useParams();
  const items = dummyData;

  return (
    <ChatPage>
      <Notification>{`${partnerName}님과의 대화`}</Notification>
      <ScreenSection>
        <MessageSection>
          {items.map((item, index) => (
            <Message key={index} item={item}></Message> // 태그 수정
          ))}
        </MessageSection>
        <InputSection>입력창 들어갑니다</InputSection>
      </ScreenSection>
    </ChatPage>
  );
};

export default Chat;

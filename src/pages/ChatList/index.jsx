import styled from 'styled-components';
import ChatList from '../../components/ChatList';
// import { useParams } from 'react-router-dom';

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
  margin-top: 20px;
`;

const dummyData = [
  {
    chat_id: 1,
    partner_name: '신혜민',
    message: '깊은 산 속 옹달샘 누가 먹고 갔나요',
    create_at: 2000000000000,
  },
  {
    chat_id: 2,
    partner_name: '류금정',
    message: '맑고 맑은 옹달샘 누가 먹고 갔나요',
    create_at: 1626876000000,
  },
];

const Index = () => {
  // const { userId } = useParams();

  const items = dummyData;

  return (
    <ChatPage>
      <Notification>{'대화 목록'}</Notification>
      <ScreenSection>
        {items.map((item) => (
          <ChatList key={item.chat_id} item={item}></ChatList>
        ))}
      </ScreenSection>
    </ChatPage>
  );
};

export default Index;

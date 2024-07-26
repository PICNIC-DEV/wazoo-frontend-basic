import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import Message from '../../components/Message';
import InputMessage from '../../components/Input';
const ChatPage = styled.div`
  padding-top: 32px;
  width: 100%;
  height: calc(100% - 160px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  height: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 20px;
`;

const MessageSection = styled.div`
  width: 100%;
  overflow-y: auto; /* 스크롤 활성화 */
  /* padding-bottom: 80px; 입력 섹션의 높이만큼 패딩 추가 */
`;

const InputSection = styled.div`
  width: 100%;
  height: 100px;
  position: absolute;
  background-color: #f9f9f9;
  bottom: 0;
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
      </ScreenSection>
      <InputSection>
        <InputMessage></InputMessage>
      </InputSection>
    </ChatPage>
  );
};

export default Chat;

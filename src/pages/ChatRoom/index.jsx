// index.js (chatroom)

import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import Message from '../../components/Message';
import Input from '../../components/Input';
import { useEffect, useState, useRef } from 'react';
import { Stomp } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

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

const Chat = () => {
  const { userId, partnerId, chatId } = useParams();
  const stompClient = useRef(null);
  // 채팅 내용들을 저장할 변수
  const [messages, setMessages] = new useState([]);

  // 웹소켓 연결 설정 및 구독
  const connect = () => {
    const socket = new SockJS('http://localhost:5173/api/ws');
    stompClient.current = Stomp.over(socket);

    // 구독
    stompClient.current.connect({}, () => {
      console.log(chatId);
      stompClient.current.subscribe(`/sub/chat/room/` + chatId, callback);
    });
  };

  // 웹소켓 연결 해제
  const disconnect = () => {
    if (stompClient.current) {
      stompClient.current.disconnect();
    }
  };

  //콜백함수 => messageList 저장하기
  const callback = function (message) {
    if (message.body) {
      let msg = JSON.parse(message.body);
      setMessages((chats) => [...chats, msg]);
    }
  };

  // 메세지 전송
  const sendMessage = (message) => {
    if (stompClient.current && message) {
      const body = {
        chatId: chatId,
        message: message,
        userId: userId,
        partnerId: partnerId,
      };
      stompClient.current.send(`/pub/message`, {}, JSON.stringify(body));
    }
  };

  // 채팅방 입장
  useEffect(() => {
    connect();
    return () => disconnect();
  }, []);

  // 입력 필드에 변화가 있을 때마다 inputValue를 업데이트
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <ChatPage>
      {/* TODO partnerName으로 바꿔야 함 */}
      <Notification>{`${partnerId}님과의 대화`}</Notification>
      <ScreenSection>
        <MessageSection>
          {messages.map((item, index) => (
            <Message key={index} item={item} userId={userId}></Message> // 태그 수정
          ))}
        </MessageSection>
      </ScreenSection>
      <InputSection>
        <Input sendMessage={sendMessage}></Input>
      </InputSection>
    </ChatPage>
  );
};

export default Chat;

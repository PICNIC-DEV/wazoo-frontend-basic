import { useEffect, useState, useRef } from 'react';
import { Stomp } from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import { useParams } from 'react-router-dom';

const Test = () => {
  const { chatId } = useParams(); // 채팅방 구분 식별자

  const stompClient = useRef(null);
  // 채팅 내용들을 저장할 변수
  const [messages, setMessages] = new useState([]);
  // 채팅 입력을 저장할 변수
  const [inputValue, setInputValue] = useState('');

  // 입력 필드에 변화가 있을 때마다 inputValue를 업데이트
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

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
  const sendMessage = () => {
    if (stompClient.current && inputValue) {
      const body = {
        chatId: chatId,
        content: inputValue,
        sender: 'User',
      };
      stompClient.current.send(`/pub/message`, {}, JSON.stringify(body));
      console.log('asdfasdfasdfas');
      setInputValue('');
    }
  };

  // 채팅방 입장
  useEffect(() => {
    connect();
    return () => disconnect();
  }, [chatId]);

  return (
    <>
      {/* {JSON.stringify(user)} */}
      {/* <GlobalStyle/> */}
      <div>
        {/* 상단 네비게이션 */}
        <div>
          <span>상대방 이름</span>
        </div>

        {/* 채팅 리스트 */}
        <div>
          {messages.map((item, index) => (
            <div key={index} className="list-item">
              {item.content}
            </div>
          ))}
        </div>

        {/* 하단 입력폼 */}
        {/* <input type="file" accept='image/*'/>  */}
        <div>
          <div>
            <input
              type="text"
              id="msg"
              // value={messages}
              placeholder="메시지 보내기"
              onChange={handleInputChange}
              onKeyDown={(ev) => {
                if (ev.keyCode === 13) {
                  sendMessage();
                }
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Test;

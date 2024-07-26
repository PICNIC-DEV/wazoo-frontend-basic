import { useEffect, useState, useRef } from 'react';
import { Stomp } from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import { useParams } from 'react-router-dom';

const Test = () => {
  const { chatId } = useParams();

  const stompClient = useRef(null);
  // 채팅 내용들을 저장할 변수
  const [messages, setMessages] = new useState([]);
  // 사용자 입력을 저장할 변수
  const [inputValue, setInputValue] = useState('');
  // 입력 필드에 변화가 있을 때마다 inputValue를 업데이트
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  // 웹소켓 연결 설정 및 구독
  const connect = () => {
    const socket = new SockJS('http://localhost:8080/api/ws');
    stompClient.current = Stomp.over(socket);
    stompClient.current.connect({}, () => {
      stompClient.current.subscribe(`/sub/chat/room/` + chatId, (message) => {
        const newMessage = JSON.parse(message.body);
        setMessages((prevMessages) => [...prevMessages, newMessage]);
      });
    });
  };

  // 웹소켓 연결 해제
  const disconnect = () => {
    if (stompClient.current) {
      stompClient.current.disconnect();
    }
  };

  // 채팅방 입장
  useEffect(() => {
    connect();
    return () => disconnect();
  }, []);

  //메세지 전송
  const sendMessage = () => {
    if (stompClient.current && inputValue) {
      const body = {
        chatId: chatId,
        content: inputValue,
        sender: 'User',
      };
      stompClient.current.send(`/pub/message`, {}, JSON.stringify(body));
      setInputValue('');
    }
  };

  return (
    <div>
      <ul>
        <div>
          {/* 입력 필드 */}
          <input type="text" value={inputValue} onChange={handleInputChange} />
          {/* 메시지 전송, 메시지 리스트에 추가 */}
          <button onClick={sendMessage}>입력</button>
        </div>
        {/* 메시지 리스트 출력 */}
        {messages.map((item, index) => (
          <div key={index} className={`list-items num-${item.writerId}`}>
            {item.content}
          </div>
        ))}
      </ul>
    </div>
  );
};
export default Test;

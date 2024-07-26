import Main from '../pages/Main';
import Chat from '../pages/ChatList';
import ChatRoom from '../pages/ChatRoom';
import Test from '../pages/Test';

const MainScreens = {
  Main: {
    path: '/',
    element: <Main />,
  },
};

const ChatListScreens = {
  ChatList: {
    path: '/chat/:userId',
    element: <Chat />,
  },
};

const ChatRoomScreens = {
  ChatRoom: {
    path: '/chat/:userId/:chatId/:partnerName',
    element: <ChatRoom />,
  },
};

const TestScreens = {
  Test: {
    path: '/test',
    element: <Test />,
  },
};

export const AppRouteDef = {
  ...MainScreens,
  ...ChatListScreens,
  ...ChatRoomScreens,
  ...TestScreens,
};

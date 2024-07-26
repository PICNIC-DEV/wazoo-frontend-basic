import Main from '../pages/Main';
import Chat from '../pages/ChatList';
import ChatRoom from '../pages/ChatRoom';
import Test from '../pages/Test';
import GuideApplication from '../pages/GuideApplication';
import Login from '../pages/Login';
import Mypage from '../pages/Mypage';
import SignUp from '../pages/SignUp';
import Quiz from '../pages/Quiz';
import QuizResult from '../pages/QuizResult';

const MainScreens = {
  Main: {
    path: '/',
    element: <Main />,
  },
  Guide: {
    path: '/guide/apply',
    element: <GuideApplication />,
  },
  Login: {
    path: '/login',
    element: <Login />,
  },
  Mypage: {
    path: '/mypage',
    element: <Mypage />,
  },
  SignUp: {
    path: '/signup',
    element: <SignUp />,
  },
  Quiz: {
    path: '/quiz',
    element: <Quiz />,
  },
  QuizResult: {
    path: '/quizresult',
    element: <QuizResult />,
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

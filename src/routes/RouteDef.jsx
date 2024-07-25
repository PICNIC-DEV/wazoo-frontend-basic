import Main from '../pages/Main';
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

export const AppRouteDef = {
  ...MainScreens,
};

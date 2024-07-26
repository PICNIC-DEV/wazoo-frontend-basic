import Main from '../pages/Main';
import GuideApplication from '../pages/GuideApplication';
import Login from '../pages/Login';
import Mypage from '../pages/Mypage';
import SignUp from '../pages/SignUp';

const MainScreens = {
  Main: {
    path: '/',
    element: <Main />,
  },
  Guide: {
    path: '/guide/apply',
    element: <GuideApplication />,
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
};

export const AppRouteDef = {
  ...MainScreens,
};

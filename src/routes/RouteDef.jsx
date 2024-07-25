import Main from '../pages/Main';
import Login from '../pages/Login';
import Mypage from '../pages/Mypage';
import SignUp from '../pages/SignUp';

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
};

export const AppRouteDef = {
  ...MainScreens,
};

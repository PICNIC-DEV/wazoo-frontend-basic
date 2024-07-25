import Main from '../pages/Main';
import GuideApplication from '../pages/GuideApplication';

const MainScreens = {
  Main: {
    path: '/',
    element: <Main />,
  },
  Guide: {
    path: '/guide/apply',
    element: <GuideApplication />,
  },
};

export const AppRouteDef = {
  ...MainScreens,
};

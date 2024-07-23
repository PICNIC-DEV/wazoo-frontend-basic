import React from 'react';
import styled from 'styled-components';
import useWindowSize from '../hooks/useWindowSize';
import AppPages from './AppPages';

const ViewArea = styled.section`
  width: ${({ width }) => (width ? `${width}px` : `100%`)};
  height: ${({ height }) => (height ? `${height}px` : `100%`)};
`;

const AppScreen = () => {
  const windowSize = useWindowSize();

  return (
    <ViewArea width={windowSize.width} height={windowSize.height}>
      <AppPages />
    </ViewArea>
  );
};

export default AppScreen;

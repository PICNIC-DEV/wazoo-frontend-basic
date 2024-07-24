import styled from 'styled-components';
import useWindowSize from '../hooks/useWindowSize';
import AppPages from './AppPages';

const ViewArea = styled.section`
  width: ${({ width }) => (width ? `calc(${width}px - 60px)` : `100%`)};
  height: ${({ height }) => (height ? `${height}px` : `100%`)};
  padding: 0 30px;
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

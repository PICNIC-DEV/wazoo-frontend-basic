import styled from 'styled-components';
import useWindowSize from '../hooks/useWindowSize';
import AppPages from './AppPages';
import Modal from '../components/Modal';

const ViewArea = styled.section`
  width: ${({ width }) => (width ? `calc(${width}px - 60px)` : `100%`)};
  height: ${({ height }) => (height ? `${height}px` : `100%`)};
  padding: 0 30px;
  background: #f9f9f9;
  min-width: 1200px;
`;

const AppScreen = () => {
  const windowSize = useWindowSize();
  return (
    <ViewArea width={windowSize.width} height={windowSize.height}>
      <Modal />
      <AppPages />
    </ViewArea>
  );
};

export default AppScreen;

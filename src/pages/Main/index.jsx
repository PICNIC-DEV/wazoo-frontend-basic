import styled from 'styled-components';
// import Map from '../../components/Map';

const MainPage = styled.div`
  padding-top: 32px;
`;
const Notification = styled.span`
  color: var(--gray-100, #374957);
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
`;
const ScreenSection = styled.div`
  display: flex;
`;
const MapContainer = styled.div``;
const CardContainer = styled.div``;

const index = () => {
  const isResult = false;

  return (
    <MainPage>
      <Notification>{isResult ? '신혜민님과 어울리는 가이드를 보여드릴게요' : '🔥 지금 가장 인기있는 가이드'}</Notification>
      <ScreenSection>
        <MapContainer>{/* <Map /> */}</MapContainer>
        <CardContainer></CardContainer>
      </ScreenSection>
    </MainPage>
  );
};

export default index;

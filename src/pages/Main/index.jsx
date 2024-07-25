import styled from 'styled-components';
import KakaoMap from '../../components/KakaoMap';

const MainPage = styled.div`
  padding-top: 32px;
  width: 100%;
  height: calc(100% - 132px);
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
  padding-top: 24px;
  width: 100%;
  height: calc(100% - 46px);
`;
const MapContainer = styled.div`
  position: relative;
  width: 50%;
`;
const CardContainer = styled.div`
  padding-left: 32px;
  width: 50%;
`;

const index = () => {
  const isResult = false;

  return (
    <MainPage>
      <Notification>{isResult ? '신혜민님과 어울리는 가이드를 보여드릴게요' : '🔥 지금 가장 인기있는 가이드'}</Notification>
      <ScreenSection>
        <MapContainer>
          <KakaoMap />
        </MapContainer>
        <CardContainer></CardContainer>
      </ScreenSection>
    </MainPage>
  );
};

export default index;

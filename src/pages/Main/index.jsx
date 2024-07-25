import styled from 'styled-components';
import KakaoMap from '../../components/KakaoMap';
import Card from '../../components/Card';

const MainPage = styled.div`
  padding-top: 32px;
  width: 100%;
  height: calc(100% - 132px);
`;
const Notification = styled.span`
  color: var(--primary-dark-color);
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
  display: grid;
  grid-template-columns: 33% 33% 33%;
  padding-left: 32px;
  width: 50%;
  max-height: calc(100% - 12px);
  overflow-y: auto;
`;

const Index = () => {
  const isResult = false;
  const cardList = [
    {
      name: '신혜민',
      address: '경기도 남양주시',
      cost: 1,
    },
    {
      name: '박주광',
      address: '경기도 화성시',
      cost: 1,
    },
    {
      name: '조동희',
      address: '대전광역시',
      cost: 1,
    },
    {
      name: '박시은',
      address: '경기도 안양시',
      cost: 1,
    },
    {
      name: '진명인',
      address: '서울특별시',
      cost: 1,
    },
    {
      name: '류금정',
      address: '대구광역시',
      cost: 1,
    },
    {
      name: '류금정',
      address: '대구광역시',
      cost: 1,
    },
    {
      name: '류금정',
      address: '대구광역시',
      cost: 1,
    },
    {
      name: '류금정',
      address: '대구광역시',
      cost: 1,
    },
    {
      name: '류금정',
      address: '대구광역시',
      cost: 1,
    },
    {
      name: '류금정',
      address: '대구광역시',
      cost: 1,
    },
    {
      name: '류금정',
      address: '대구광역시',
      cost: 1,
    },
    {
      name: '류금정',
      address: '대구광역시',
      cost: 1,
    },
    {
      name: '류금정',
      address: '대구광역시',
      cost: 1,
    },
    {
      name: '류금정',
      address: '대구광역시',
      cost: 1,
    },
    {
      name: '류금정',
      address: '대구광역시',
      cost: 1,
    },
  ];

  return (
    <MainPage>
      <Notification>{isResult ? '신혜민님과 어울리는 가이드를 보여드릴게요' : '🔥 지금 가장 인기있는 가이드'}</Notification>
      <ScreenSection>
        <MapContainer>
          <KakaoMap />
        </MapContainer>
        <CardContainer>
          {cardList.map((item, index) => (
            <Card key={'card-' + index} info={item} />
          ))}
        </CardContainer>
      </ScreenSection>
    </MainPage>
  );
};

export default Index;

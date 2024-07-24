import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  background-color: #ffffff;
  border: 1px solid var(--border-color);
  width: calc(100% - 22px);
  height: 210px;
  left: 0;
  top: 80px;
  z-index: 10;
  border-radius: 30px;
  padding: 20px 10px;
`;
const Item = styled.div`
  display: flex;
  justify-content: space-between;
  width: calc(100% - 12px);
  height: 50px;
  padding: 10px 5px;
  line-height: 50px;
  border-radius: 15px;
`;
const Title = styled.div`
  font-size: 0.75rem;
  font-weight: 500;
  padding-bottom: 2px;
  line-height: 1rem;
`;
const SubTitle = styled.div`
  font-size: 0.85rem;
  font-weight: 500;
  line-height: 1rem;
  color: #6a6a6a;
  text-overflow: ellipsis;
  border: 0;
  cursor: pointer;
`;
const Count = styled.div`
  padding: 0 10px;
`;
const Info = styled.div``;
const Select = styled.div`
  display: flex;
  align-items: center;
`;

const List = (props) => {
  const guest = props.guest;
  const isVisible = props.isGuestOpen;
  return (
    <>
      {isVisible && (
        <Container>
          <Item>
            <Info>
              <Title>성인</Title>
              <SubTitle>13세 이상</SubTitle>
            </Info>
            <Select>
              <div
                className="icon count"
                onClick={() => {
                  props.onSelect('adult', 'minus');
                }}
              >
                <svg className="icon-minus" />
              </div>
              <Count>{guest.adult}</Count>
              <div
                className="icon count"
                onClick={() => {
                  props.onSelect('adult', 'plus');
                }}
              >
                <svg className="icon-plus" />
              </div>
            </Select>
          </Item>
          <Item>
            <Info>
              <Title>어린이</Title>
              <SubTitle>2~12세</SubTitle>
            </Info>
            <Select>
              <div
                className="icon count"
                onClick={() => {
                  props.onSelect('kid', 'minus');
                }}
              >
                <svg className="icon-minus" />
              </div>
              <Count>{guest.kid}</Count>
              <div
                className="icon count"
                onClick={() => {
                  props.onSelect('kid', 'plus');
                }}
              >
                <svg className="icon-plus" />
              </div>
            </Select>
          </Item>
          <Item>
            <Info>
              <Title>유아</Title>
              <SubTitle>2세 미만</SubTitle>
            </Info>
            <Select>
              <div
                className="icon count"
                onClick={() => {
                  props.onSelect('baby', 'minus');
                }}
              >
                <svg className="icon-minus" />
              </div>
              <Count>{guest.baby}</Count>
              <div
                className="icon count"
                onClick={() => {
                  props.onSelect('baby', 'plus');
                }}
              >
                <svg className="icon-plus" />
              </div>
            </Select>
          </Item>
        </Container>
      )}
    </>
  );
};

export default List;

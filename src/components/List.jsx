import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  background-color: #ffffff;
  border: 1px solid var(--border-color);
  width: calc(100% - 22px);
  max-height: 200px;
  overflow: auto;
  left: 0;
  top: 80px;
  z-index: 10;
  border-radius: 30px;
  padding: 20px 10px;
`;
const Item = styled.div`
  width: calc(100% - 12px);
  height: 40px;
  padding: 10px 5px;
  line-height: 40px;
  border-radius: 15px;
  &:hover {
    background: #EBEBEB;
  }
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

const List = (props) => {
  const items = props.items
  const isVisible = props.isDestinationOpen
  return (
    <>
      { (isVisible && items.length > 0) &&
        <Container>
          {items.map((item, index) => (
            <Item key={index} onClick={() => {props.onSelect(item.structured_formatting.main_text)}}>
              <Title>{item.structured_formatting.main_text}</Title>
              <SubTitle>{item.structured_formatting.secondary_text}</SubTitle>
              </Item>
          ))}
        </Container>
      }
    </>
  );
};

export default List;

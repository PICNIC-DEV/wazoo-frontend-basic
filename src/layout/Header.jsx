import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import styled from 'styled-components';
import List from '../components/List';
import Calendar from '../components/Calendar';
import GuestSelection from '../components/GuestSelection';
import usePlacesService from 'react-google-autocomplete/lib/usePlacesAutocompleteService';

const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  position: relative;

  &::after {
    position: absolute;
    content: '';
    width: 100%;
    background-color: var(--border-color);
    height: 1px;
    bottom: 0;
  }
`;
const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 10px 20px;
  justify-content: space-between;
  align-items: center;
`;
//logo section
const Home = styled.div`
  width: 70px;
  height: 30px;
`;
const LinkLogo = styled(Link)`
  text-decoration: none;
`;
const Logo = styled.svg`
  width: 24px;
  height: 24px;
`;
// calender section
const SearchControls = styled.div`
  max-width: 850px;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
`;
const SearchForms = styled.div`
  display: flex;
  background-color: ${({ $ismenuopen }) => ($ismenuopen.status ? '#EBEBEB' : '#ffffff')};
  width: 100%;
  border: 1px solid var(--border-color);
  border-radius: 30px;
  box-shadow:
    0 3px 12px 0 rgba(0, 0, 0, 0.1),
    0 1px 2px 0 rgba(0, 0, 0, 0.08);
`;
const DestinationSearch = styled.div`
  width: 100%;
  border-radius: 30px;
  padding: 15px 30px;
  box-sizing: border-box;
  position: relative;
  align-items: center;
  background-color: ${({ $ismenuopen }) => ($ismenuopen.status ? ($ismenuopen.selected == 1 ? '#ffffff !important' : '#EBEBEB') : '#ffffff')};
  &:hover {
    background-color: #ebebeb;
  }
  &::after {
    position: absolute;
    content: '';
    width: 1px;
    background-color: var(--border-color);
    height: 40px;
    bottom: 15px;
    right: 0;
  }
`;
const Title = styled.div`
  font-size: 0.75rem;
  font-weight: 500;
  padding-bottom: 2px;
  line-height: 1rem;
`;
const DestinationInput = styled.input`
  font-size: 0.85rem;
  font-weight: 500;
  line-height: 1rem;
  color: #222222;
  text-overflow: ellipsis;
  border: 0;
  background: none;
`;
const DateRange = styled.div`
  display: flex;
  position: relative;
`;
const StartController = styled.div`
  width: 140px;
  border-radius: 30px;
  padding: 15px 30px;
  box-sizing: border-box;
  position: relative;
  background-color: ${({ $ismenuopen }) => ($ismenuopen.status ? ($ismenuopen.selected == 2 ? '#ffffff !important' : '#EBEBEB') : '#ffffff')};
  &:hover {
    background-color: #ebebeb;
  }
  &::after {
    position: absolute;
    content: '';
    width: 1px;
    background-color: var(--border-color);
    height: 40px;
    bottom: 15px;
    right: 0;
  }
`;
const EndController = styled.div`
  width: 140px;
  border-radius: 30px;
  padding: 15px 30px;
  box-sizing: border-box;
  position: relative;
  background-color: ${({ $ismenuopen }) => ($ismenuopen.status ? ($ismenuopen.selected == 3 ? '#ffffff !important' : '#EBEBEB') : '#ffffff')};
  &:hover {
    background-color: #ebebeb;
  }
  &::after {
    position: absolute;
    content: '';
    width: 1px;
    background-color: var(--border-color);
    height: 40px;
    bottom: 15px;
    right: 0;
  }
`;
const Input = styled.div`
  font-size: 0.85rem;
  font-weight: 500;
  line-height: 1rem;
  color: #6a6a6a;
  text-overflow: ellipsis;
  border: 0;
  cursor: pointer;
`;
const GuestInput = styled.div`
  display: flex;
  width: 100%;
  border-radius: 30px;
  padding: 15px 30px;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  position: relative;
  background-color: ${({ $ismenuopen }) => ($ismenuopen.status ? ($ismenuopen.selected == 4 ? '#ffffff !important' : '#EBEBEB') : '#ffffff')};
  &:hover {
    background-color: #ebebeb;
  }
`;
const InputContainer = styled.div``;
const SearchButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 20px;
  background: var(--gray-20, #d7dbdd);
  margin: 0;
  padding: 0;
  border: 0;
`;
//profile section
const Profile = styled.div``;

const Header = () => {
  const headerRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState({
    status: false,
    selected: null,
  });
  const [isDateOpen, setIsDateOpen] = useState(false);
  const [isDestinationOpen, setIsDestinationOpen] = useState(false);
  const [isGuestOpen, setIsGuestOpen] = useState(false);
  const [dateRange, setDateRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  });
  const [searchObj, setSearchObj] = useState({
    destination: '',
    startDate: '날짜 선택',
    endDate: '날짜 선택',
    guest: {
      adult: 0,
      kid: 0,
      baby: 0,
    },
  });
  const { placePredictions, getPlacePredictions, isPlacePredictionsLoading } = usePlacesService({
    apiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  const onSelect = (num) => {
    setIsDateOpen(false);
    setIsDestinationOpen(false);
    setIsGuestOpen(false);
    if (num == 1) {
      setIsDestinationOpen(true);
    }
    if ([2, 3].includes(num)) {
      setIsDateOpen(true);
    }
    if (num == 4) {
      setIsGuestOpen(true);
    }
    setIsMenuOpen({ ...isMenuOpen, status: true, selected: num });
  };

  const handleClickOutside = (event) => {
    if (headerRef.current && !headerRef.current.contains(event.target)) {
      setIsMenuOpen({ ...isMenuOpen, status: false });
      setIsDateOpen(false);
      setIsDestinationOpen(false);
      setIsGuestOpen(false);
    }
  };

  const handleDateRange = (ranges) => {
    setDateRange({ ...dateRange, startDate: ranges.selection.startDate, endDate: ranges.selection.endDate });
    setSearchObj({ ...searchObj, startDate: format(ranges.selection.startDate, 'MM-dd'), endDate: format(ranges.selection.endDate, 'MM-dd') });
  };

  const searchDestination = (event) => {
    getPlacePredictions({ input: event.target.value });
    setSearchObj({ ...searchObj, destination: event.target.value });
  };

  const handleDestination = (value) => {
    setSearchObj({ ...searchObj, destination: value });
  };

  const handleGuest = (value, key) => {
    if (value === 'adult') {
      setSearchObj({
        ...searchObj,
        guest: {
          ...searchObj.guest,
          adult: key === 'plus' ? searchObj.guest.adult + 1 : searchObj.guest.adult - 1,
        },
      });
    } else if (value === 'kid') {
      setSearchObj({
        ...searchObj,
        guest: {
          ...searchObj.guest,
          kid: key === 'plus' ? searchObj.guest.kid + 1 : searchObj.guest.kid - 1,
        },
      });
    } else {
      setSearchObj({
        ...searchObj,
        guest: {
          ...searchObj.guest,
          baby: key === 'plus' ? searchObj.guest.baby + 1 : searchObj.guest.baby - 1,
        },
      });
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <HeaderContainer>
      <Container>
        <Home>
          <LinkLogo to={'/'}>
            <svg className="icon-logo" />
          </LinkLogo>
        </Home>
        <SearchControls ref={headerRef}>
          <SearchForms $ismenuopen={isMenuOpen}>
            <DestinationSearch $ismenuopen={isMenuOpen} onClick={() => onSelect(1)}>
              <Title>여행지</Title>
              <DestinationInput placeholder="여행지 검색" onChange={searchDestination} value={searchObj.destination} />
              <List items={placePredictions} isDestinationOpen={isDestinationOpen} onSelect={handleDestination} />
            </DestinationSearch>
            <DateRange>
              <StartController $ismenuopen={isMenuOpen} onClick={() => onSelect(2)}>
                <Title>시작일</Title>
                <Input>{searchObj.startDate}</Input>
              </StartController>
              <EndController $ismenuopen={isMenuOpen} onClick={() => onSelect(3)}>
                <Title>종료일</Title>
                <Input>{searchObj.endDate}</Input>
              </EndController>
              <Calendar dateRange={dateRange} onChange={handleDateRange} isDateOpen={isDateOpen} />
            </DateRange>
            <GuestInput $ismenuopen={isMenuOpen} onClick={() => onSelect(4)}>
              <InputContainer>
                <Title>게스트</Title>
                <Input>게스트 추가</Input>
              </InputContainer>
              <SearchButton>
                <svg className="icon-search" />
              </SearchButton>
              <GuestSelection onSelect={handleGuest} guest={searchObj.guest} isGuestOpen={isGuestOpen} />
            </GuestInput>
          </SearchForms>
        </SearchControls>
        <Profile>
          <div className="icon profile">
            <svg className="icon-profile" />
          </div>
        </Profile>
      </Container>
    </HeaderContainer>
  );
};

export default Header;

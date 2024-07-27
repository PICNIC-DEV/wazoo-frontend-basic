import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { hideModal } from '../redux/modalSlice';
import GuideInfo from './modal/GuideInfo';

const MODAL_TYPES = {
  GuideInfo: 'GuideInfo',
};

const MODAL_COMPONENTS = [
  {
    type: MODAL_TYPES.GuideInfo,
    component: <GuideInfo />,
  },
];

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 20;
`;
const OverLay = styled.div`
  position: absolute;
  left: 25%;
  top: 25%;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.16);
`;
const Render = styled.div`
  position: relative;
  padding: 40px;
`;
const CloseBtn = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;

const Modal = () => {
  const dispatch = useDispatch();
  const { isVisible, modalType } = useSelector((state) => state.modal);

  const closeModal = () => {
    dispatch(hideModal());
  };

  const findModal = MODAL_COMPONENTS.find((modal) => {
    return modal.type === modalType;
  });

  const renderModal = () => {
    return findModal.component;
  };

  if (!isVisible) return null;
  return (
    <Container onClick={closeModal}>
      <OverLay>
        <Render>
          <CloseBtn>
            <svg onClick={closeModal} className="icon-close" />
          </CloseBtn>
          {renderModal()}
        </Render>
      </OverLay>
    </Container>
  );
};

export default Modal;

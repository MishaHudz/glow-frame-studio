import Modal from 'react-modal';
import styled from 'styled-components';

export const MobileModal = styled(Modal)`
  position: absolute;
  top: 50%;
  left: 50%;

  width: 60%;
  height: 60%;
  background-color: #000;

  border: 2px solid #fff;
  border-radius: 40px;

  display: flex;
  align-items: center;
  justify-content: center;
  transform: translate(-50%, -50%);
  padding: 30px;
`;

export const MobileModalCloseBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
`;

export const MobileModalCloseBtnIcon = styled.svg`
  stroke: #fff;
`;

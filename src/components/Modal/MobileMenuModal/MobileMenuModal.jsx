import React from 'react';
import sprite from '../../../assets/images/sprite.svg';
import NavigationList from 'components/NavigationList/NavigationList';
import {
  MobileModal,
  MobileModalCloseBtn,
  MobileModalCloseBtnIcon,
} from './MobileMenuModal.styled';

const customStyles = {
  overlay: {
    background: 'rgba(5, 5, 5, 0.8)',
  },
};

const MobileMenuModal = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  const onCloseButtonClick = () => {
    document.body.style.overflow = 'auto';
    setMobileMenuOpen(false);
  };

  return (
    <MobileModal
      isOpen={mobileMenuOpen}
      onRequestClose={onCloseButtonClick}
      ariaHideApp={false}
      contentLabel="mobile menu"
      style={customStyles}
    >
      <MobileModalCloseBtn type="button" onClick={onCloseButtonClick}>
        <MobileModalCloseBtnIcon width="30px" height="30px">
          <use xlinkHref={`${sprite}#close-icon`} />
        </MobileModalCloseBtnIcon>
      </MobileModalCloseBtn>
      <NavigationList />
    </MobileModal>
  );
};

export default MobileMenuModal;

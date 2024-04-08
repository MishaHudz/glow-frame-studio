import sprite from '../../assets/images/sprite.svg';
import { BurgerBtn, BurgerButtonIcon } from './BurgerButton.styled';

const BurgerButton = ({ setMobileMenuOpen }) => {
  const onOpenMenuButtonClick = () => {
    setMobileMenuOpen(true);
    document.body.style.overflow = 'hidden';
  };
  return (
    <BurgerBtn onClick={onOpenMenuButtonClick}>
      <BurgerButtonIcon width="30px" height="30px">
        <use xlinkHref={`${sprite}#burger-menu`} />
      </BurgerButtonIcon>
    </BurgerBtn>
  );
};

export default BurgerButton;

import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';

import sprite from '../../assets/images/sprite.svg';
import {
  ImageCarouselCustomButton,
  ImageCarouselCustomButtonSvg,
  ImageCarouselCustomButtonsContainer,
} from './ImageCarouselCustomButtons.styled';

const ReviewsSwiperCustomButtons = () => {
  return (
    <ImageCarouselCustomButtonsContainer>
      <ImageCarouselCustomButton type="button" className="carousel-prev-btn">
        <ImageCarouselCustomButtonSvg width="17px" height="32px">
          <use xlinkHref={`${sprite}#prev-icon`} />
        </ImageCarouselCustomButtonSvg>
      </ImageCarouselCustomButton>
      <ImageCarouselCustomButton type="button" className="carousel-next-btn">
        <ImageCarouselCustomButtonSvg width="17px" height="32px">
          <use xlinkHref={`${sprite}#next-icon`} />
        </ImageCarouselCustomButtonSvg>
      </ImageCarouselCustomButton>
    </ImageCarouselCustomButtonsContainer>
  );
};

export default ReviewsSwiperCustomButtons;

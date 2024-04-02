import { useMediaQuery } from 'react-responsive';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import { Scrollbar, Navigation } from 'swiper';

import {
  ImageCarouselWrapper,
  ImageCarouselContainer,
  ImageCarouselSlideContainer,
} from './ImageCarousel.styled';
import CarouselItem from 'components/CarouselItem/CarouselItem';
import ReviewsSwiperCustomButtons from 'components/ImageCarouselCustomButtons/ImageCarouselCustomButtons';

import Example1_Night from '../../assets/images/examples/ex1_night.jpg';
import Example1_Day from '../../assets/images/examples/ex1_light.jpg';

function ImageCarousel() {
  const isDesktopScreen = useMediaQuery({ minWidth: 1440 });

  const images = [
    {
      imgPath: Example1_Night,
    },
    {
      imgPath: Example1_Day,
    },
    {
      imgPath: Example1_Night,
    },
    {
      imgPath: Example1_Day,
    },
  ];

  return (
    <ImageCarouselWrapper>
      {isDesktopScreen && <ReviewsSwiperCustomButtons />}

      <ImageCarouselContainer
        spaceBetween={0}
        slidesPerView={1}
        modules={[Scrollbar, Navigation]}
        scrollbar={{ draggable: true }}
        navigation={{
          nextEl: '.carousel-next-btn',
          prevEl: '.carousel-prev-btn',
        }}
      >
        {images?.map(({ label, imgPath }, i) => (
          <ImageCarouselSlideContainer key={i}>
            <CarouselItem label={label} image={imgPath} />
          </ImageCarouselSlideContainer>
        ))}
      </ImageCarouselContainer>
    </ImageCarouselWrapper>
  );
}

export default ImageCarousel;

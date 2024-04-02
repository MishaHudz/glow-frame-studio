import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

export const ImageCarouselWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  width: 100%;

  .swiper-button-disabled {
    color: gray;
    border-color: gray;

    & svg {
      stroke: gray;
    }
  }
`;

export const ImageCarouselSlideContainer = styled(SwiperSlide)`
  width: 327px;
  min-height: 263px;
  padding-bottom: 24px;

  @media (min-width: 768px) {
    width: 316px;
    min-height: 369px;
  }

  @media (min-width: 1440px) {
    width: 409px;
    padding-bottom: 0px;
  }
`;

export const ImageCarouselContainer = styled(Swiper)`
  position: relative;
  width: 327px;
  overflow: hidden;
  margin-bottom: 24px;

  .swiper-scrollbar {
    background-color: #000;
    width: 327px;
    height: 2px;
  }

  .swiper-scrollbar-drag:last-child {
    background-color: #fb6514;

    min-height: 2px;
  }

  .swiper-scrollbar-drag:not(:last-child) {
    display: none;
  }
  @media (min-width: 768px) {
    width: 656px;

    .swiper-scrollbar {
      width: 656px;
    }
  }

  @media (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;

    width: 1117px;
    .swiper-scrollbar-drag:last-child {
      display: none;
    }

    .swiper-scrollbar {
      display: none;
    }
  }
`;

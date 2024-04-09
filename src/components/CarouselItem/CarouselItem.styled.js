import styled from 'styled-components';

export const CarouselItemImage = styled.img`
  width: 100%;
  border-radius: 20px;

  @media (min-width: 768px) {
    width: 80%;
    border-radius: 30px;
  }

  @media (min-width: 1440px) {
    width: 700px;
    border-radius: 40px;
  }
`;

export const CarouselItemImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

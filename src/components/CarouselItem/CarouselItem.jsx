import {
  CarouselItemImage,
  CarouselItemImageContainer,
} from './CarouselItem.styled';

function CarouselItem({ label, image }) {
  return (
    <CarouselItemImageContainer>
      <CarouselItemImage src={image} alt={label} />
    </CarouselItemImageContainer>
  );
}

export default CarouselItem;

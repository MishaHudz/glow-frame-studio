import {
  BenefitsItem,
  BenefitsListItemImage,
  BenefitsListItemParagraph,
  ItemDescriptionContainer,
  ItemDescriptionTitle,
} from './BenefitsListItem.styled';

function BenefitsListItem({ benefit: { image, description, title } }) {
  return (
    <BenefitsItem>
      <BenefitsListItemImage src={image} alt="" />

      <ItemDescriptionContainer>
        <ItemDescriptionTitle>{title}</ItemDescriptionTitle>
        <BenefitsListItemParagraph>{description}</BenefitsListItemParagraph>
      </ItemDescriptionContainer>
    </BenefitsItem>
  );
}

export default BenefitsListItem;

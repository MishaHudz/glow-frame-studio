import {
  BenefitsItem,
  BenefitsListItemImage,
  BenefitsListItemParagraph,
} from './BenefitsListItem.styled';

function BenefitsListItem({ benefit: { image, description } }) {
  return (
    <BenefitsItem>
      <BenefitsListItemImage src={image} alt="" />
      <BenefitsListItemParagraph>{description}</BenefitsListItemParagraph>
    </BenefitsItem>
  );
}

export default BenefitsListItem;

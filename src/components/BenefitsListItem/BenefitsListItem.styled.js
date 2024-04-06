import styled from 'styled-components';

export const BenefitsItem = styled.li`
  position: relative;
  overflow: visible;
  display: flex;

  padding: 60px 40px;
  border-radius: 30px;

  &:nth-child(2n-1) {
    background-color: #fb6514;
    flex-direction: row-reverse;

    img {
      left: 7%;
    }
  }
`;

export const BenefitsListItemImage = styled.img`
  width: 350px;
  border-radius: 10%;
  box-shadow: 0px -25px 20px -20px rgba(249, 241, 241, 0.45),
    25px 0px 20px -20px rgba(246, 243, 243, 0.45),
    0px 25px 20px -20px rgba(247, 241, 241, 0.45),
    -25px 0px 20px -20px rgba(242, 231, 231, 0.45);

  position: absolute;
  right: 7%;
  top: 50%;
  z-index: 2;
  transform: translateY(-50%);
`;

export const BenefitsListItemParagraph = styled.p`
  width: 100%;
`;

export const ItemDescriptionContainer = styled.div`
  width: 60%;
`;

export const ItemDescriptionTitle = styled.h3`
  font-size: 22px;
  margin-bottom: 15px;
`;

import styled from 'styled-components';

export const BenefitsItem = styled.li`
  position: relative;
  overflow: visible;
  display: flex;
  padding: 100px 20px;
  border-radius: 30px;

  @media (min-width: 600px) {
    padding: 120px 40px;
  }

  @media (min-width: 768px) {
    padding: 60px 40px;
    min-height: 136px;
  }

  @media (min-width: 1440px) {
  }

  &:nth-child(2n-1) {
    background-color: #fb6514;
    flex-direction: row-reverse;

    img {
      @media (min-width: 768px) {
        left: 3%;
      }

      @media (min-width: 1100px) {
        left: 5%;
      }

      @media (min-width: 1440px) {
        left: 7%;
      }
    }
  }

  @media (min-width: 768px) {
    padding: 25px 20px;
  }

  @media (min-width: 1440px) {
    padding: 60px 40px;
  }
`;

export const BenefitsListItemImage = styled.img`
  border-radius: 10%;
  box-shadow: 0px -25px 20px -20px rgba(249, 241, 241, 0.45),
    25px 0px 20px -20px rgba(246, 243, 243, 0.45),
    0px 25px 20px -20px rgba(247, 241, 241, 0.45),
    -25px 0px 20px -20px rgba(242, 231, 231, 0.45);

  position: absolute;
  top: -30%;
  right: 50%;
  transform: translateX(50%);
  z-index: 2;
  width: 45%;
  min-width: 200px;

  @media (min-width: 600px) {
    top: -30%;
  }

  @media (min-width: 768px) {
    transform: translateY(-50%);
    top: 50%;
    right: 3%;

    max-width: 250px;
    width: 35%;
  }
  @media (min-width: 1100px) {
    right: 5%;
    max-width: 270px;
    width: 40%;
  }

  @media (min-width: 1440px) {
    width: 350px;
    max-width: 350px;
    right: 7%;
  }
`;

export const BenefitsListItemParagraph = styled.p`
  font-size: 11px;
  width: 100%;
  @media (min-width: 768px) {
    font-size: 12px;
  }

  @media (min-width: 1440px) {
    font-size: 16px;
  }
`;

export const ItemDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  @media (min-width: 768px) {
    width: 60%;
  }

  @media (min-width: 1440px) {
  }
`;

export const ItemDescriptionTitle = styled.h3`
  text-align: center;
  font-size: 15px;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    text-align: left;
    font-size: 18px;
    margin-bottom: 5px;
  }

  @media (min-width: 1440px) {
    font-size: 22px;
    margin-bottom: 15px;
  }
`;

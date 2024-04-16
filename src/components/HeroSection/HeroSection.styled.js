import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const pulsate = keyframes`
  0% {
   transform: scale(1);
    box-shadow: 0 0 0 0 rgba(251, 101, 20, 0.7);
  }
  50% {
    transform: scale(1.1);
    box-shadow: 0 0 0 20px rgba(251, 101, 20, 0);
  }
  100% {
      transform: scale(1);
    box-shadow: 0 0 0 40px rgba(251, 101, 20, 0);
  }
`;

export const HeroSect = styled.section`
  display: flex;
  justify-content: center;

  margin-bottom: 60px;
`;

export const HeroSectContentContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column-reverse;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  @media (min-width: 1440px) {
  }
`;

export const HeroSectInfoParagraph = styled.p`
  text-align: center;
  font-size: 11px;

  padding: 0px 15px;

  @media (min-width: 768px) {
    font-size: 12px;
  }

  @media (min-width: 1440px) {
    font-size: 16px;
  }
`;

export const HeroSectInfoLink = styled(Link)`
  padding: 10px 10px;
  border: none;
  border-radius: 40px;

  background-color: #fb6514;
  box-shadow: 0 0 30px rgba(255, 255, 255, 0.3);

  font-size: 16px;

  &:hover,
  &:focus {
    animation: ${pulsate} 2s infinite;
  }

  @media (min-width: 768px) {
    padding: 10px 20px;
    border-radius: 40px;
    font-size: 20px;
  }

  @media (min-width: 1440px) {
    padding: 20px 40px;
    border-radius: 40px;
    font-size: 24px;
  }
`;
export const HeroSectInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  gap: 30px;

  @media (min-width: 768px) {
    width: 50%;
    gap: 0px;
  }

  @media (min-width: 1440px) {
  }
`;

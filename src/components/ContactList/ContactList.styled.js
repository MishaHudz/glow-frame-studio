import styled from 'styled-components';

export const ContactLst = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 25px;
  justify-content: space-around;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 0;
  }

  @media (min-width: 1440px) {
  }
`;

export const ContactLstItem = styled.li`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    width: 33%;
  }

  @media (min-width: 1440px) {
    width: 25%;
  }
`;

export const ContactLstItemIcon = styled.svg`
  fill: #fb6514;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    scale: 1.2;
    margin-bottom: 20px;
  }

  @media (min-width: 1440px) {
    scale: 1.5;
    margin-bottom: 25px;
  }
`;

export const ContactLstTitle = styled.h3`
  text-align: center;
  font-size: 14px;
  margin-bottom: 5px;

  @media (min-width: 768px) {
    font-size: 18px;
    margin-bottom: 8px;
  }

  @media (min-width: 1440px) {
    font-size: 22px;
    margin-bottom: 10px;
  }
`;

export const ContactLstDescription = styled.p`
  font-size: 10px;
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 5px;

  @media (min-width: 768px) {
    font-size: 12px;
  }

  @media (min-width: 1440px) {
    font-size: 14px;
  }
`;

export const ContactLstLink = styled.a`
  font-size: 12px;
  text-align: center;
  color: #fb6514;
  transition: transform 250ms linear, text-shadow 250ms linear;

  &:hover,
  &:focus {
    transform: translateY(-2px);
    text-shadow: 1px 1px;
  }

  @media (min-width: 768px) {
    font-size: 14px;
  }

  @media (min-width: 1440px) {
    font-size: 16px;
  }
`;

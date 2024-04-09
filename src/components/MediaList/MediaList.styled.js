import styled from 'styled-components';

export const MediaLst = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;

  gap: 10px;

  margin-bottom: 10px;

  @media (min-width: 768px) {
    gap: 20px;
  }

  @media (min-width: 1440px) {
    gap: 30px;
  }
`;

export const MediaLstIcon = styled.svg`
  fill: #fff;
  scale: 0.6;

  transition: fill 100ms linear;
  &:hover,
  &:focus {
    fill: #fb6514;
  }

  @media (min-width: 768px) {
    font-size: 14px;
    scale: 0.7;
  }

  @media (min-width: 1440px) {
    font-size: 16px;
    scale: 0.8;
  }
`;

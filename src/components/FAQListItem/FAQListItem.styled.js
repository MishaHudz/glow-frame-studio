import styled from 'styled-components';

export const FAQItem = styled.li`
  width: 90%;
  border: 1px solid #fff;
  border-radius: 25px;
  padding: 10px;

  @media (min-width: 768px) {
    padding: 15px;
    border-radius: 30px;
  }

  @media (min-width: 1440px) {
    padding: 20px;
    border-radius: 40px;
  }
`;

export const QuestionContainer = styled.div`
  position: relative;
`;

export const QuestionButton = styled.button`
  position: absolute;
  right: 5px;
  top: 50%;

  width: 20px;
  height: 20px;

  transform: translateY(-50%);
  transition: scale 250ms linear;

  &:hover,
  &:focus {
    scale: 1.1;
  }

  @media (min-width: 768px) {
    width: 25px;
    height: 25px;
    right: 15px;
  }

  @media (min-width: 1440px) {
    width: 32px;
    height: 32px;
    right: 30px;
  }
`;

export const QuestionButtonSvgDown = styled.svg`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  fill: #fff;

  @media (min-width: 768px) {
    width: 25px;
    height: 25px;
    right: 15px;
  }

  @media (min-width: 1440px) {
    width: 32px;
    height: 32px;
    right: 30px;
  }
`;

export const QuestionButtonSvgUp = styled.svg`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;

  fill: #fb6514;

  @media (min-width: 768px) {
    width: 25px;
    height: 25px;
    right: 15px;
  }

  @media (min-width: 1440px) {
    width: 32px;
    height: 32px;
    right: 30px;
  }
`;

export const Question = styled.p`
  font-weight: 600;
  font-size: 12px;
  width: 85%;

  @media (min-width: 768px) {
    font-size: 14px;
    width: 90%;
  }

  @media (min-width: 1440px) {
    font-size: 16px;
  }
`;

export const Answer = styled.p`
  width: 85%;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 15px;

  @media (min-width: 768px) {
    font-size: 14px;
    width: 90%;
  }

  @media (min-width: 1440px) {
    font-size: 16px;
  }
`;

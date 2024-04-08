import styled from 'styled-components';

export const FAQItem = styled.li`
  width: 90%;
  border: 1px solid #fff;
  border-radius: 40px;
  padding: 20px;
`;

export const QuestionContainer = styled.div`
  position: relative;
`;

export const QuestionButton = styled.button`
  position: absolute;

  top: 50%;
  right: 30px;

  transform: translateY(-50%);
  transition: scale 250ms linear;

  &:hover,
  &:focus {
    scale: 1.1;
  }
`;

export const QuestionButtonSvgDown = styled.svg`
  fill: #fff;
`;

export const QuestionButtonSvgUp = styled.svg`
  fill: #fb6514;
`;

export const Question = styled.p`
  font-weight: 600;

  width: 90%;
`;

export const Answer = styled.p`
  width: 90%;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 15px;
`;

import styled, { keyframes } from 'styled-components';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const OrderFrm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 30px;
`;

export const OrderFrmLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const OrderFrmInput = styled.input`
  padding: 5px 10px;
  border: 2px solid #fff;
  border-radius: 15px;
  outline: none;
  background-color: transparent;
  color: inherit;
  &.error {
    border-color: #cb1134;
  }
`;

//  file input
export const OrderFrmFileInput = styled.input`
  display: none;
`;

export const OrderFrmFileLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  width: 40px;
  height: 40px;
  padding: 5px;
  margin-left: auto;
  margin-right: auto;

  border: 3px solid #fff;
  border-radius: 10px;

  transition: all 150ms linear;

  &:hover,
  &:focus {
    border-color: #fb6514;
  }

  &:hover svg.reload,
  &:focus svg.reload {
    animation: ${rotate360} 2s infinite linear;
  }

  &:hover svg.add,
  &:focus svg.add {
    scale: 1.1;
  }

  &:hover svg,
  &:focus svg {
    fill: #fb6514;
  }

  @media (min-width: 768px) {
    width: 60px;
    height: 60px;
  }

  @media (min-width: 1440px) {
    width: 80px;
    height: 80px;
    padding: 20px;
  }
`;

export const OrderFrmFileLabelIcon = styled.svg`
  fill: #fff;
  width: 15px;
  transition: all 150ms linear;

  @media (min-width: 768px) {
    width: 24px;
  }

  @media (min-width: 1440px) {
    width: 32px;
  }
`;

//

export const OrderFrmFieldset = styled.fieldset`
  width: 80%;
  border-radius: 40px;
  padding: 20px;

  display: flex;
  flex-wrap: wrap;

  justify-content: space-around;
`;

export const OrderFrmLegend = styled.legend`
  text-align: center;
`;

export const ErrorMsg = styled.p`
  text-align: center;
  color: #cb1134;
`;

export const RadioInputsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 30px;
`;

export const OrderBtn = styled.button`
  min-width: 100px;
  padding: 20px;
  border: 2px solid #fb6514;

  border-radius: 30px;

  line-height: 1em;

  transition: all 150ms linear;

  &:hover,
  &:focus {
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(251, 101, 20, 0.4);
  }
`;

import styled from 'styled-components';

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

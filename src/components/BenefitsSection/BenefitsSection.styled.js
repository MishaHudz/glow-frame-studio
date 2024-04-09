import styled from 'styled-components';

export const BenefitsSect = styled.section`
  display: flex;
  justify-content: center;

  margin-bottom: 60px;
`;

export const SectContainer = styled.div`
  width: 80%;
  background-color: #1b1b1b;

  padding: 40px 0px;
  border-radius: 30px;

  @media (min-width: 768px) {
    padding: 60px 0px;
    border-radius: 45px;
  }

  @media (min-width: 1440px) {
    padding: 80px 0px;
    border-radius: 60px;
  }
`;

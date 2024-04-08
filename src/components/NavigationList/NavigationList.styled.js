import styled from 'styled-components';

export const HeadNavigationList = styled.ul`
  display: flex;
  align-items: center;

  flex-direction: column;
  height: 100%;
  justify-content: space-around;

  @media (min-width: 768px) {
    height: auto;
    gap: 20px;
    flex-direction: row;
  }

  @media (min-width: 1440px) {
    gap: 40px;
  }
`;

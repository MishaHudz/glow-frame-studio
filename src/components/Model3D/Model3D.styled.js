import styled from 'styled-components';

export const ModelContainer = styled.div`
  width: 200px;
  height: 200px;

  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;

  @media (min-width: 768px) {
    margin: 0px;
    width: 250px;
    height: 250px;
  }

  @media (min-width: 1440px) {
    width: 300px;
    height: 300px;
  }
`;

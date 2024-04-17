import styled from 'styled-components';

export const ModelContainer = styled.div`
  position: relative;
  width: 200px;
  height: 200px;

  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    margin: 0px;
    margin-top: auto;
    margin-bottom: auto;
    width: 250px;
    height: 250px;
  }

  @media (min-width: 1440px) {
    width: 350px;
    height: 350px;
  }
`;

export const LoaderContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
`;

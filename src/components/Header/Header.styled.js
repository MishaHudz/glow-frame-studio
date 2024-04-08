import styled from 'styled-components';

export const Head = styled.header`
  display: flex;
  justify-content: center;

  border-bottom: 1px solid #fff;

  padding: 15px 0px;
  margin-bottom: 30px;

  @media (min-width: 768px) {
    padding: 20px 0px;
    margin-bottom: 50px;
  }

  @media (min-width: 1440px) {
    padding: 30px 0px;
    margin-bottom: 60px;
  }
`;

export const HeaderMainIcon = styled.img`
  width: 60px;
  height: 60px;
  @media (min-width: 768px) {
    width: 80px;
    height: 80px;
  }

  @media (min-width: 1440px) {
    width: 100px;
    height: 100px;
  }
`;

export const HeadContainer = styled.div`
  display: flex;
  justify-content: space-between;

  width: 80%;
`;

export const HeadRightContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;

  gap: 30px;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 60px;
  }

  @media (min-width: 1440px) {
    gap: 100px;
  }
`;

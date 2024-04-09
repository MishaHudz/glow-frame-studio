import styled from 'styled-components';

export const Foot = styled.footer`
  display: flex;
  justify-content: center;

  padding: 30px 0px;
  border-top: 1px solid #fff;
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 80%;
  @media (min-width: 768px) {
  }

  @media (min-width: 1440px) {
  }
`;

export const FootCopyright = styled.p`
  text-align: center;
  font-size: 12px;

  @media (min-width: 768px) {
    font-size: 14px;
  }

  @media (min-width: 1440px) {
    font-size: 16px;
  }
`;

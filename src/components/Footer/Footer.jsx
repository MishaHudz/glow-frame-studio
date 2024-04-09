import MediaList from 'components/MediaList/MediaList';
import { Foot, FootCopyright, FooterContainer } from './Footer.styled';

function Footer() {
  return (
    <Foot>
      <FooterContainer>
        <MediaList />
        <FootCopyright>&#169;Copyright. All rights reserved.</FootCopyright>
      </FooterContainer>
    </Foot>
  );
}

export default Footer;

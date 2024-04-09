import sprite from '../../assets/images/sprite.svg';
import { MediaLst, MediaLstIcon } from './MediaList.styled';

function MediaList() {
  return (
    <MediaLst>
      <li>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MediaLstIcon width="32px" height="32px">
            <use xlinkHref={`${sprite}#facebook`} />
          </MediaLstIcon>
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MediaLstIcon width="32px" height="32px">
            <use xlinkHref={`${sprite}#instagram`} />
          </MediaLstIcon>
        </a>
      </li>
      <li>
        <a
          href="https://web.telegram.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MediaLstIcon width="32px" height="32px">
            <use xlinkHref={`${sprite}#telegram`} />
          </MediaLstIcon>
        </a>
      </li>
      <li>
        <a
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MediaLstIcon width="32px" height="32px">
            <use xlinkHref={`${sprite}#youtube`} />
          </MediaLstIcon>
        </a>
      </li>
    </MediaLst>
  );
}

export default MediaList;

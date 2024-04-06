import { LanguageSelectBtn } from '../LanguageSelect.styled';
import sprite from '../../../assets/images/sprite.svg';

export function UkrButton({ click, argument, setShowList }) {
  const onButtonClick = () => {
    click(argument);
    window.localStorage.setItem('language', argument);

    if (setShowList) {
      setShowList(false);
      window.localStorage.setItem('language', argument);
    }
  };

  return (
    <LanguageSelectBtn onClick={onButtonClick}>
      <svg width="35px" height="29px">
        <use xlinkHref={`${sprite}#ukr`} />
      </svg>
      <span>ukr</span>
    </LanguageSelectBtn>
  );
}

export function EngButton({ click, argument, setShowList }) {
  const onButtonClick = () => {
    click(argument);

    if (setShowList) {
      setShowList(false);
      window.localStorage.setItem('language', argument);
    }
  };
  return (
    <LanguageSelectBtn onClick={onButtonClick}>
      <svg width="35px" height="29px">
        <use xlinkHref={`${sprite}#eng`} />
      </svg>
      <span>eng</span>
    </LanguageSelectBtn>
  );
}

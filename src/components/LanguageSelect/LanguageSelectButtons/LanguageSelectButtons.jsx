import { LanguageSelectBtn } from '../LanguageSelect.styled';
import sprite from '../../../assets/images/sprite.svg';
import { setLanguage } from '../../../redux/language/languageSlice';
import { useDispatch, useSelector } from 'react-redux';

export function UkrButton({ argument, setShowList }) {
  const isEnglish = useSelector(state => state.language.isEnglish);
  const dispatch = useDispatch();

  const onButtonClick = () => {
    setShowList(argument);

    if (!isEnglish) {
      return;
    }

    dispatch(setLanguage(false));
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

export function EngButton({ argument, setShowList }) {
  const isEnglish = useSelector(state => state.language.isEnglish);
  const dispatch = useDispatch();

  const onButtonClick = () => {
    setShowList(argument);

    if (isEnglish) {
      return;
    }

    dispatch(setLanguage(true));
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

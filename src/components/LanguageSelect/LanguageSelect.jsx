import { useState } from 'react';
import LanguageSelectList from './LanguageSelectList/LanguageSelectList';
import {
  EngButton,
  UkrButton,
} from './LanguageSelectButtons/LanguageSelectButtons';
import { LanguageSelectContainer } from './LanguageSelect.styled';
import { useSelector } from 'react-redux';

function LanguageSelect() {
  const [showList, setShowList] = useState(false);
  const isEnglish = useSelector(state => state.language.isEnglish);

  return (
    <LanguageSelectContainer>
      {!showList && isEnglish && (
        <EngButton setShowList={setShowList} argument={true} />
      )}
      {!showList && !isEnglish && (
        <UkrButton setShowList={setShowList} argument={true} />
      )}
      {showList && <LanguageSelectList setShowList={setShowList} />}
    </LanguageSelectContainer>
  );
}

export default LanguageSelect;

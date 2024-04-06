import { MyContext } from 'сontext/context';
import { useContext, useState } from 'react';
import LanguageSelectList from './LanguageSelectList/LanguageSelectList';
import {
  EngButton,
  UkrButton,
} from './LanguageSelectButtons/LanguageSelectButtons';
import { LanguageSelectContainer } from './LanguageSelect.styled';

function LanguageSelect() {
  const [showList, setShowList] = useState(false);
  const { isEnglish } = useContext(MyContext);

  return (
    <LanguageSelectContainer>
      {!showList && isEnglish && (
        <EngButton click={setShowList} argument={true} />
      )}
      {!showList && !isEnglish && (
        <UkrButton click={setShowList} argument={true} />
      )}
      {showList && <LanguageSelectList setShowList={setShowList} />}
    </LanguageSelectContainer>
  );
}

export default LanguageSelect;

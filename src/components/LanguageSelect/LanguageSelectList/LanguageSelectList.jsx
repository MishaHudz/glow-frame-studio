import { MyContext } from 'сontext/context';
import { useContext } from 'react';
import {
  EngButton,
  UkrButton,
} from '../LanguageSelectButtons/LanguageSelectButtons';

function LanguageSelectList({ setShowList }) {
  const { setIsEnglish } = useContext(MyContext);

  return (
    <>
      <ul>
        <li>
          <UkrButton
            click={setIsEnglish}
            argument={false}
            setShowList={setShowList}
          />
        </li>

        <li>
          <EngButton
            click={setIsEnglish}
            argument={true}
            setShowList={setShowList}
          />
        </li>
      </ul>
    </>
  );
}

export default LanguageSelectList;

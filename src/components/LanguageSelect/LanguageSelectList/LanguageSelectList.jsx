import {
  EngButton,
  UkrButton,
} from '../LanguageSelectButtons/LanguageSelectButtons';

function LanguageSelectList({ setShowList }) {
  return (
    <>
      <ul>
        <li>
          <UkrButton argument={false} setShowList={setShowList} />
        </li>

        <li>
          <EngButton argument={false} setShowList={setShowList} />
        </li>
      </ul>
    </>
  );
}

export default LanguageSelectList;

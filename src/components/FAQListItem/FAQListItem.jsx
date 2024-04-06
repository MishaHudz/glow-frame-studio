import { useState } from 'react';

import sprite from '../../assets/images/sprite.svg';
import {
  Answer,
  FAQItem,
  Question,
  QuestionButton,
  QuestionButtonSvgDown,
  QuestionButtonSvgUp,
  QuestionContainer,
} from './FAQListItem.styled';

function FAQListItem({ question, answer }) {
  const [isShow, setIsShow] = useState(false);

  const onShowBtnClick = () => {
    setIsShow(prev => !prev);
  };

  return (
    <FAQItem>
      <QuestionContainer>
        <Question>{question}</Question>
        <QuestionButton onClick={onShowBtnClick}>
          {!isShow && (
            <QuestionButtonSvgDown width="32px" height="32px">
              <use xlinkHref={`${sprite}#circle-down`} />
            </QuestionButtonSvgDown>
          )}
          {isShow && (
            <QuestionButtonSvgUp width="32px" height="32px">
              <use xlinkHref={`${sprite}#circle-up`} />
            </QuestionButtonSvgUp>
          )}
        </QuestionButton>
      </QuestionContainer>
      {isShow && <Answer>{answer}</Answer>}
    </FAQItem>
  );
}

export default FAQListItem;

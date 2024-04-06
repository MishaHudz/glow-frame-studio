import { SectContainer } from 'components/BenefitsSection/BenefitsSection.styled';
import { FAQSList, FAQSect } from './FAQSection.styled';
import FAQListItem from 'components/FAQListItem/FAQListItem';
import SectionTitle from 'components/SectionTitle/SectionTitle';
import { useContext } from 'react';
import { MyContext } from 'сontext/context';
import { languageSelect } from 'helpers/languageSelect';

function FAQSection() {
  const { isEnglish } = useContext(MyContext);
  const QuestionsList = [
    {
      question: languageSelect(isEnglish).FAQSection.question1,
      answer: languageSelect(isEnglish).FAQSection.answer1,
    },
    {
      question: languageSelect(isEnglish).FAQSection.question2,
      answer: languageSelect(isEnglish).FAQSection.answer2,
    },
    {
      question: languageSelect(isEnglish).FAQSection.question3,
      answer: languageSelect(isEnglish).FAQSection.answer3,
    },
  ];
  return (
    <FAQSect>
      <SectContainer>
        <SectionTitle title="FAQ" />
        <FAQSList>
          {QuestionsList.map((question, i) => (
            <FAQListItem
              key={i}
              question={question.question}
              answer={question.answer}
            />
          ))}
        </FAQSList>
      </SectContainer>
    </FAQSect>
  );
}

export default FAQSection;

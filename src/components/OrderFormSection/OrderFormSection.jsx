import { SectContainer } from 'components/BenefitsSection/BenefitsSection.styled';
import { OrderFormSect } from './OrderFormSection.styled';
import OrderForm from 'components/OrderForm/OrderForm';
import SectionTitle from 'components/SectionTitle/SectionTitle';
import { languageSelect } from 'helpers/languageSelect';
import { useContext } from 'react';
import { MyContext } from 'сontext/context';

function OrderFormSection() {
  const { isEnglish } = useContext(MyContext);
  return (
    <OrderFormSect>
      <SectContainer>
        <SectionTitle title={languageSelect(isEnglish).FormSection.title} />
        <OrderForm />
      </SectContainer>
    </OrderFormSect>
  );
}

export default OrderFormSection;

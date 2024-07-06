import { useSelector } from 'react-redux';
import { SectContainer } from 'components/BenefitsSection/BenefitsSection.styled';
import { OrderFormSect } from './OrderFormSection.styled';
import OrderForm from 'components/OrderForm/OrderForm';
import SectionTitle from 'components/SectionTitle/SectionTitle';
import { languageSelect } from 'helpers/languageSelect';

function OrderFormSection() {
  const isEnglish = useSelector(state => state.language.isEnglish);
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

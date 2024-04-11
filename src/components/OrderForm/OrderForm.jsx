import { useFormik } from 'formik';
import {
  ErrorMsg,
  OrderBtn,
  OrderFrm,
  OrderFrmFieldset,
  OrderFrmInput,
  OrderFrmLabel,
  OrderFrmLegend,
  RadioInputsContainer,
} from './OrderForm.styled';
import { basicSchema } from 'schemas';
import InputMask from 'react-input-mask';
import { useContext } from 'react';
import { MyContext } from 'сontext/context';
import { languageSelect } from 'helpers/languageSelect';

function OrderForm() {
  const { isEnglish } = useContext(MyContext);

  const onFormSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        name: '',
        surname: '',
        email: '',
        tell: '',
        settlement: '',
        department: '',
        company: 'novaPoshta',
      },
      validationSchema: basicSchema,
      onSubmit: onFormSubmit,
    });
  return (
    <OrderFrm onSubmit={handleSubmit}>
      <OrderFrmFieldset>
        <OrderFrmLegend>
          {languageSelect(isEnglish).FormSection.firstLegend.title}
        </OrderFrmLegend>
        <div>
          <OrderFrmLabel htmlFor="name">
            {languageSelect(isEnglish).FormSection.firstLegend.name}
            <OrderFrmInput
              id="name"
              type="text"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.name && touched.name && 'error'}
            />
          </OrderFrmLabel>
          {errors.name && touched.name && <ErrorMsg> {errors.name} </ErrorMsg>}
        </div>

        <div>
          <OrderFrmLabel htmlFor="surname">
            {languageSelect(isEnglish).FormSection.firstLegend.surname}
            <OrderFrmInput
              id="surname"
              type="text"
              value={values.surname}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.surname && touched.surname && 'error'}
            />
          </OrderFrmLabel>
          {errors.surname && touched.surname && (
            <ErrorMsg> {errors.surname} </ErrorMsg>
          )}
        </div>
      </OrderFrmFieldset>

      <OrderFrmFieldset>
        <OrderFrmLegend>
          {languageSelect(isEnglish).FormSection.secondLegend.title}
        </OrderFrmLegend>
        <div>
          <OrderFrmLabel htmlFor="email">
            {languageSelect(isEnglish).FormSection.secondLegend.email}
            <OrderFrmInput
              id="email"
              type="text"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.email && touched.email && 'error'}
            />
          </OrderFrmLabel>
          {errors.email && touched.email && (
            <ErrorMsg> {errors.email} </ErrorMsg>
          )}
        </div>

        <div>
          <OrderFrmLabel htmlFor="tell">
            {languageSelect(isEnglish).FormSection.secondLegend.tell}
            <InputMask
              mask="+38 (999) 99-99-999"
              maskChar="_"
              value={values.tell}
              onBlur={handleBlur}
              onChange={handleChange}
            >
              {inputProps => (
                <OrderFrmInput
                  id="tell"
                  type="text"
                  className={errors.tell && touched.tell && 'error'}
                />
              )}
            </InputMask>
          </OrderFrmLabel>

          {errors.tell && touched.tell && <ErrorMsg> {errors.tell} </ErrorMsg>}
        </div>
      </OrderFrmFieldset>

      <OrderFrmFieldset>
        <OrderFrmLegend>
          {languageSelect(isEnglish).FormSection.thirdLegend.title}
        </OrderFrmLegend>
        <RadioInputsContainer>
          <OrderFrmLabel>
            {languageSelect(isEnglish).FormSection.thirdLegend.post1}
            <OrderFrmInput
              name="company"
              type="radio"
              value="novaPoshta"
              checked={values.company === 'novaPoshta'}
              onChange={handleChange}
            />
          </OrderFrmLabel>
          <OrderFrmLabel>
            {languageSelect(isEnglish).FormSection.thirdLegend.post2}
            <OrderFrmInput
              name="company"
              type="radio"
              value="ukrPoshta"
              checked={values.company === 'ukrPoshta'}
              onChange={handleChange}
            />
          </OrderFrmLabel>
        </RadioInputsContainer>

        <div>
          <OrderFrmLabel htmlFor="settlement">
            {languageSelect(isEnglish).FormSection.thirdLegend.settlement}
            <OrderFrmInput
              id="settlement"
              type="text"
              value={values.settlement}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.settlement && touched.settlement && 'error'}
            />
          </OrderFrmLabel>
          {errors.settlement && touched.settlement && (
            <ErrorMsg> {errors.settlement} </ErrorMsg>
          )}
        </div>

        <div>
          <OrderFrmLabel>
            {languageSelect(isEnglish).FormSection.thirdLegend.department}
            <OrderFrmInput
              id="department"
              type="number"
              value={values.department}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.department && touched.department && 'error'}
            />
          </OrderFrmLabel>

          {errors.department && touched.department && (
            <ErrorMsg> {errors.department} </ErrorMsg>
          )}
        </div>
      </OrderFrmFieldset>

      <OrderBtn type="submit">
        {languageSelect(isEnglish).FormSection.orderBtn}
      </OrderBtn>
    </OrderFrm>
  );
}

export default OrderForm;

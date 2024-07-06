import { useFormik } from 'formik';
import {
  ErrorMsg,
  OrderBtn,
  OrderFrm,
  OrderFrmFieldset,
  OrderFrmFileInput,
  OrderFrmFileLabel,
  OrderFrmFileLabelIcon,
  OrderFrmInput,
  OrderFrmLabel,
  OrderFrmLegend,
  RadioInputsContainer,
} from './OrderForm.styled';
import { basicSchema } from 'schemas';
import InputMask from 'react-input-mask';
import { useSelector } from 'react-redux';

import { languageSelect } from 'helpers/languageSelect';
import PreviewImage from 'components/PreviewImage/PreviewImage';
import sprite from '../../assets/images/sprite.svg';

function OrderForm() {
  const isEnglish = useSelector(state => state.language.isEnglish);

  const onFormSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: {
      name: '',
      surname: '',
      email: '',
      tell: '',
      settlement: '',
      department: '',
      company: 'novaPoshta',
      image: '',
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

      <OrderFrmFieldset>
        <OrderFrmLegend>
          {languageSelect(isEnglish).FormSection.fourthLegend.title}
        </OrderFrmLegend>
        <div>
          <OrderFrmFileLabel htmlFor="file-select">
            {!values.image && (
              <OrderFrmFileLabelIcon className="add" width="32px" height="32px">
                <use xlinkHref={`${sprite}#plus`} />
              </OrderFrmFileLabelIcon>
            )}
            {values.image && (
              <OrderFrmFileLabelIcon
                className="reload"
                width="32px"
                height="32px"
              >
                <use xlinkHref={`${sprite}#reload`} />
              </OrderFrmFileLabelIcon>
            )}
          </OrderFrmFileLabel>
          <OrderFrmFileInput
            id="file-select"
            type="file"
            name="image"
            onChange={evt => setFieldValue('image', evt.target.files[0])}
          />
          {errors.image && touched.image && (
            <ErrorMsg> {errors.image} </ErrorMsg>
          )}
          {values.image && <PreviewImage imageFile={values.image} />}
        </div>
      </OrderFrmFieldset>

      <OrderBtn type="submit">
        {languageSelect(isEnglish).FormSection.orderBtn}
      </OrderBtn>
    </OrderFrm>
  );
}

export default OrderForm;

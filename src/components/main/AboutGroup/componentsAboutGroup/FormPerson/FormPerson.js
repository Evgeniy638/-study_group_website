import React from 'react'
import style from './FormPerson.module.css'
import { reduxForm, reset, Field } from 'redux-form'
import InputField from '../../../../../assets/components/InputField.js/InputField'
import { minLengthCreator, maxLengthCreator } from '../../../../../assets/validators/validators'
import InputImage from '../../../../../assets/components/InputImage/InputImage'

const maxLength = maxLengthCreator(30)
const minLength = minLengthCreator(1)

const FromPerson = (props) => (
     <div className={style.wrap}>
          <form onSubmit={props.handleSubmit}>
               <Field
                    name="surname"
                    placeholder="Фамилия"
                    component={InputField}
                    validate={[minLength, maxLength]}
               />
               <Field
                    name="name"
                    placeholder="Имя"
                    component={InputField}
                    validate={[minLength, maxLength]}
               />
               <Field
                    name="patronymic"
                    placeholder="Отчество"
                    component={InputField}
                    validate={[minLength, maxLength]}
               />
               <Field
                    name="image"
                    component={InputImage}
                    className={style.input_image}
               />
               <button
                    className="button"
                    disabled={props.isDisabledPersonForm}
               >Добавить человека в группу</button>
          </form>
     </div>
)

const PersonReduxForm = reduxForm({
     form: 'PersonReduxForm',
     onSubmitSuccess(result, dispatch) {
          dispatch(reset('ordersTradesSearchForm'))
     }
})(FromPerson)

export default PersonReduxForm

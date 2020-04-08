import React from 'react'
import style from './FormNews.module.css'
import { reduxForm, reset, Field } from 'redux-form'
import InputImage from '../../../../../assets/components/InputImage/InputImage'
import TextareaField from '../../../../../assets/components/TextareaField/TextareaField'
import { minLengthCreator, maxLengthCreator } from '../../../../../assets/validators/validators'

const minLength = minLengthCreator(1)
const maxLength = maxLengthCreator(300)

const FromNews = (props) => {
     
     return(
          <div className={style.wrap}>
               <form className={style.form} onSubmit={props.handleSubmit}>
                    <Field
                         name="text"
                         component={TextareaField}
                         validate={[minLength, maxLength]}
                         className={style.textarea_field}
                         placeholder="Введите текст новости"
                    />
                    <Field
                         name="file"
                         component={InputImage}
                    />
                    <div className={style.buttun_form}>
                         <button type="submit" className="button">Создать новость</button>
                    </div>
               </form>
          </div>
     )
}

const FormNewsRedux = reduxForm({
     form: "FormNewsRedux",
     onSubmitSuccess(result, dispatch){
          dispatch(reset("ordersTradesSearchForm"))
     }
})(FromNews)

export default FormNewsRedux
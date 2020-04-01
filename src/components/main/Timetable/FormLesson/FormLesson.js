import React from 'react'
import style from './FormLesson.module.css'
import { Field, reduxForm, reset } from 'redux-form';
import { maxLengthCreator, minLengthCreator, validatorTimeInput } from './../../../../assets/validators/validators';
import InputField from './../../../../assets/components/InputField.js/InputField';

const maxLength = maxLengthCreator(30)
const minLength = minLengthCreator(1)

const FormLesson = (props) => (
    <div className={style.wrap}>
        <form onSubmit={props.handleSubmit}>
            <Field
                name="lessonNumber"
                placeholder="Номер урока"
                component={InputField}
                validate={[minLength, maxLength]}
            />
            <Field
                name="timeBegin"
                placeholder="Время начала урока"
                component={InputField}
                validate={[minLength, maxLength, validatorTimeInput]}
            />
            <Field
                name="timeEnd"
                placeholder="Время конца урока"
                component={InputField}
                validate={[minLength, maxLength, validatorTimeInput]}
            />
            <Field
                name="subject"
                placeholder="Название урока"
                component={InputField}
                validate={[minLength, maxLength]}
            />
            <Field
                name="teacher"
                placeholder="ФИО преподавателя"
                component={InputField}
                validate={[minLength, maxLength]}
            />
            <Field
                name="type"
                placeholder="Тип урока"
                component={InputField}
                validate={[minLength, maxLength]}
            />
            <Field
                name="cabinet"
                placeholder="Номер кабинета"
                component={InputField}
                validate={[minLength, maxLength]}
            />
            <button className="button" disabled={props.isDisabledFormButton}>Добавить урок</button>
        </form>
    </div>
)

const LessonReduxForm = reduxForm({
    form: 'FormLesson',
    onSubmitSuccess(result, dispatch) {
         dispatch(reset('ordersTradesSearchForm'))
    }
})(FormLesson);

export default LessonReduxForm
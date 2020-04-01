import React from 'react'
import LessonReduxForm from './FormLesson';

export default class FormLessonClassContainer extends React.Component{
    createLesson = (data) => {
        this.props.disableFormButton()
        this.props.createLesson(data)
    }

    render(){
        return(
            <LessonReduxForm
                onSubmit={this.createLesson}
                isDisabledFormButton={this.props.isDisabledFormButton}
            />
        )
    }
}
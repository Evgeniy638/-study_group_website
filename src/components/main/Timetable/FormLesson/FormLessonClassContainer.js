import React from 'react'
import LessonReduxForm from './FormLesson';

export default class FormLessonClassContainer extends React.Component{
    addLesson(data){
        console.log(data)
    }

    render(){
        return(
            <LessonReduxForm
                onSubmit={this.addLesson}
            />
        )
    }
}
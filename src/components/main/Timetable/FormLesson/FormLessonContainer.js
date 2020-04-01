import { connect } from "react-redux"
import FormLessonClassContainer from "./FormLessonClassContainer"
import { createLessonThunkCreator, toggleFormButtonActionCreator } from "../../../../bll/reducers/reducerTimetable"
import { getIsDisabledFormButton } from '../../../../bll/selector'


const mapStateToProps = (state) => ({
     isDisabledFormButton: getIsDisabledFormButton(state)
})

const mapDispatchToProps = (dispatch) => ({
     createLesson(lesson){
          dispatch(createLessonThunkCreator(lesson))
     },
     disableFormButton(){
          dispatch(toggleFormButtonActionCreator(true))
     }
})

export default connect(mapStateToProps, mapDispatchToProps)(FormLessonClassContainer)
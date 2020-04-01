import { getIsDisabledPersonForm } from "../../../../../bll/selector";
import { toggleDisabledPersonFormActionCreator, createPersonThunkCreator } from "../../../../../bll/reducers/reducerAboutGroup";
import FormPersonClassContainer from "./FormPersonClassContainer";
import { connect } from "react-redux";


const mapStateToProps = (state) => ({
     isDisabledPersonForm: getIsDisabledPersonForm(state)
})

const mapDispatchToProps = (dispatch) => ({
     disablePersonForm(){
          dispatch(toggleDisabledPersonFormActionCreator(true))
     },
     createPerson(person){
          dispatch(createPersonThunkCreator(person))
     }
})

export default connect(mapStateToProps, mapDispatchToProps)(FormPersonClassContainer)
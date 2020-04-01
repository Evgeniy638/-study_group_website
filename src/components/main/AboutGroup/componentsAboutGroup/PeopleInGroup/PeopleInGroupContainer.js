import { connect } from "react-redux"
import PeopleInGroupClassContainer from "./PeopleInGroupClassContainer"
import { getGroupByState } from "../../../../../bll/selector"
import { 
     getGroupThunkCreator, 
     clearStateAboutGroupActionCreator, 
     deletePersonThunkCreator 
} from "../../../../../bll/reducers/reducerAboutGroup"


const mapStateToProps = (state) => ({
     group: getGroupByState(state)
})

const mapDispatchToProps = (dispatch) => ({
     getGroup(){
          dispatch(getGroupThunkCreator())
     },
     clearStateAboutGroup(){
          dispatch(clearStateAboutGroupActionCreator())
     },
     deletePerson(id){
          dispatch(deletePersonThunkCreator(id))
     }
})

export default connect(mapStateToProps, mapDispatchToProps)(PeopleInGroupClassContainer)
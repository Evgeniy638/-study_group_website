import { connect } from "react-redux"
import { getTimetableByState } from "../../../bll/selector";
import { getTimetableThunkCreator, clearDataTimetableActionCreator } from "../../../bll/reducers/reducerTimetable";
import TimetableClassContainer from "./TimetableClassContainer";

const mapStateToProps = (state) => ({
     timetable: getTimetableByState(state)
})

const mapDispatchToProps = (dispatch) => ({
     getTimetable(timetable){
          dispatch(getTimetableThunkCreator(timetable))
     },
     clearData(){
          dispatch(clearDataTimetableActionCreator())
     }
})

export default connect(mapStateToProps, mapDispatchToProps)(TimetableClassContainer)
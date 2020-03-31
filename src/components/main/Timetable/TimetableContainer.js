import { connect } from "react-redux"
import { getTimetableByState } from "../../../bll/selector";
import { getTimetableThunkCreator, clearDataTimetableActionCreator } from "../../../bll/reducers/reducerTimetable";
import TimetableClassContainer from "./TimetableClassContainer";
import { getAdminMode } from './../../../bll/selector';

const mapStateToProps = (state) => ({
     timetable: getTimetableByState(state),
     adminMode: getAdminMode(state)
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